const newWord = document.querySelector("#newWord");

const renderNewWord = (word) => {
    newWord.innerHTML = `<h1>${word}</h1>`;
}