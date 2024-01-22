function getDataFromView() {
    let letter = document.getElementById('letter').value;
    if (letter != "") {
        getResponse(letter);
    } else {
        alert("Introduce una Letra");
    }

    return (false);
}





