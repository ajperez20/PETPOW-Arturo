const socket = io();

socket.on('html', (html) => {
    document.querySelector('body').innerHTML = html;
});

socket.emit('render', {
    title: 'Mi titulo',
    message: "Mi mensaje"
})