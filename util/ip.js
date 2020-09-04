const axios = require('axios');

const url = "http://api.ipstack.com/"

//function which gets the location based on address.
async function getInformation(ip) {
    var urlForInformation = url + ip + "?access_key=74ce8e19f02f4125d2d29f45482d18e9";
    const response = await axios.get(urlForInformation);
    if(response.type === null){
        throw new Error('Unable to find location. Try another search.');
    } 
    else {
        return response.data
    }
}

module.exports = getInformation;