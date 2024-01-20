
/**
 * GetFormData.js ==>>>>>
 * 
 * function sendData: envía la data obtenida de la vista game haciendo una petición http al backend
 * esta información es pasada como parámetros por medio de la ruta que se especifica en
 * el action del form cuando lo modificamos usando setAttribute y luego se lanza el evento
 * submit().
 */

const gameForm = document.querySelector('#formData');
const gameInput = document.querySelector('#letter');

function sendData(generatedWord, hiddenWord, playerLives) {

    gameForm.addEventListener('submit', e => {
        let letter = gameInput.value;
        e.preventDefault();
        if (letter != "") {
            let url = "/users/game/" + generatedWord + "/" + letter + "/" + hiddenWord + "/" + playerLives;
            gameForm.setAttribute('action', url);
            gameForm.submit();
        } else {
            alert("Introduce una Letra");
        }
    })
}



