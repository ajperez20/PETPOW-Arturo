const socket = io();

socket.emit('client:getGameData');
socket.on('server:gameView', (html) => {
    gameView(html);
})

const getResponse = (letter) => {
    socket.emit('client:getResponse', letter);
    socket.on('server:getResponse', (data) => {
        updateGame(data);
    })
    socket.on('server:getWin', (html) => {
        winView(html);
    })

    socket.on('server:getLose', (html) => {
        LoseView(html);
    })
}



