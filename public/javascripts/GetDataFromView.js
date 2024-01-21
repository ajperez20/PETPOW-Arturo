
/**
 * GetFormData.js ==>>>>>
 * 
 * function sendData: envía la data obtenida de la vista game haciendo una petición http al backend
 * esta información es pasada como parámetros por medio de la ruta que se especifica en
 * el action del form cuando lo modificamos usando setAttribute y luego se lanza el evento
 * submit().
 */


function getDataFromView() {
    let letter = document.getElementById('letter').value;
    if (letter != "") {
        getResponse(letter);
    } else {
        alert("Introduce una Letra");
    }

    return (false);
}





