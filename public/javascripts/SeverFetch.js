const axios = require('axios');
const { response } = require('../../app');
/**
 * SeverFetch.js =>>>>
 * 
 * const data: función que retorna un objeto promesa al conectarse a la api de palabras
 * por medio de fetch haciendo una solicitud http.
 * 
 */

const getWord = () =>{
    return axios({
        method: 'get',
        url: 'https://pow-3bae6d63ret5.deno.dev/word',
    }).then((response)=>response.data);
}

module.exports = {getWord};




