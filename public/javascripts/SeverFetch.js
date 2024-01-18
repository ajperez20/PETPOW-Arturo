const data = () => {
    return fetch('https://pow-3bae6d63ret5.deno.dev/word', { method: "GET" })
        .then(response => response.json())
        .then(jsonData => jsonData)
        .catch(error => console.log(error));
};

module.exports = data;




