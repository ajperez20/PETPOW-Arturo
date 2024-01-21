const socket = io();

//Esto solo sucede cuando se hace la primera entrada al juego o sea start


socket.emit('client:getGameData');
socket.on('server:gameView', (html) => {
    gameView(html);
})

const getResponse = (letter) => {
    socket.emit('client:getResponse', letter);
    socket.on('server:getResponse', (data) => {
        updateHiddenWord(data);
    })
    socket.on('server:getWin', (html) => {
        winView(html);
    })

    socket.on('server:getLose', (html) => {
        LoseView(html);
    })
}



