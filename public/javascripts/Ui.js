const gameView = (html) => {
    document.querySelector('body').innerHTML = html
}

const winView = (html) => {
    document.querySelector('body').innerHTML = html
}

const LoseView = (html) => {
    document.querySelector('body').innerHTML = html
}

const updateHiddenWord = (data) => {
    document.querySelector('#hiddenWord').innerHTML = data.hiddenWord;
    document.querySelector('#playerLives').innerHTML = "Vidas Disponibles: " + data.playerLives;
    document.getElementById('letter').value = ""
}
