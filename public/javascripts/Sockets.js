

const socket = io();

const dataGame = (oriW, newW, lives, letter) => {
    socket.emit('client:newWord', {
        originalW: oriW,
        newW: newW,
        lives: lives,
        letter: letter
    })
};

socket.on('server:newWord', (word) => {
    console.log(word.newWord);
})

