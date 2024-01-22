const axios = require('axios');

const getWord = () =>{
    return axios({
        method: 'get',
        url: 'https://pow-3bae6d63ret5.deno.dev/word',
    }).then((response)=>response.data);
}

module.exports = {getWord};




