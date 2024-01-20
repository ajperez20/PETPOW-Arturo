const socket = io();

socket.on('html', (html) => {
    console.log('estoy aqui')
    document.querySelector('body').innerHTML = html


});

socket.emit('render')