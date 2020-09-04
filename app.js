const express = require('express');
const getInformation = require('./util/ip.js');
const port = process.env.PORT || 5000
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req,res) => {
    res.send("Request information route :)")
})


app.get('/information', (req,res) => {
    if(!req.query.ip){
        res.send({
            error: "No ip query found"
        })
    } else {
        async function start(){
            var information = await getInformation(req.query.ip);
            res.send({
                information
            })
        }
        start();
    }
})

app.listen(port, () => {
	console.log("The server is listening on port 5000")
})