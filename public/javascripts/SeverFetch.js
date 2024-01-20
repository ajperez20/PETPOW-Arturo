
/**
 * SeverFetch.js =>>>>
 * 
 * const data: función que retorna un objeto promesa al conectarse a la api de palabras
 * por medio de fetch haciendo una solicitud http.
 * 
 */
const data = () => {
    return fetch('https://pow-3bae6d63ret5.deno.dev/word', { method: "GET" })
        .then(response => response.json())
        .then(jsonData => jsonData)
        .catch(error => console.log(error));
};

module.exports = data;




