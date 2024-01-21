const gameView = (html) => {
    document.querySelector('body').innerHTML = html
}

const winView = (html) => {
    document.querySelector('body').innerHTML = html
}

const LoseView = (html) => {
    document.querySelector('body').innerHTML = html
}

const updateGame = (data) => {
    document.querySelector('#hiddenWord').innerHTML = `<h1 id="hiddenWord">${data.hiddenWord}</h1>`;
    document.querySelector('#playerLives').innerHTML = `<h3 class="mt-3 mb-2" id="playerLives">Vidas Disponibles: ${data.playerLives}</h3>`
    document.getElementById('letter').value = ""
}
