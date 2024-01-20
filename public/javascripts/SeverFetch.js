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
const data = async () => {
    const data = fetch('', { method: "GET" })
    const word =  await data.then(response => {return response.json()});
    return word;
};

module.exports = {data, getWord};




