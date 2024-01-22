
const gameView = (hiddenWord, playerLives) => {
    return ` 
    <section class="hero align-items-stretch">
        <div class="d-flex flex-column justify-content-center align-items-center" id="playerLives">
        <h3 class="mt-3 mb-2" id="playerLives">Vidas Disponibles: ${playerLives}</h3>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center mt-5">
        <img src="/images/logoGame.png" width="300" heigth="100" alt="Algo">
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="row align-items-center">
            <div class="col" id="newWord">
            <h1 id="hiddenWord">${hiddenWord}</h1>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col">
            <form class="card card-body rounded-0 mt-5" style="Background-color: #0D462E" id="formData" onSubmit="return getDataFromView()">
                <h1 class="h3 mb-3">Escribe una Letra</h1>
                <input type="text" id="letter" name="letter" placeholder="Escribe una letra" class="form-control rounded-0 mb-3" autofocus autocomplete="off">
                <button type="submit" class="btn btn-success">Enviar</button>
            </form>
            </div>
        </div>
        </div>
    </section>
`
}


const winGameView = () => {
    return `
    <section class="hero align-items-stretch">
      <div class="d-flex flex-column justify-content-center align-items-center mt-5">
        <img src="/images/CupWin.svg" width="300" alt="Muerto">
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>Has Ganado ¡huraaaaaaaaaaaaaaaaaaaaaaaaa!................</h1>
        <p>¡Hey! ¿Quieres Intentarlo De Nuevo?</p>
        <a class="btn btn-secondary btn-lg" href="/users/game" role="button">Volver A Jugar</a>
      </div>
    </section>
    `;
}

const loseGameView = (generatedWord) => {
    return `
    <section class="hero align-items-stretch">
      <div class="d-flex flex-column justify-content-center align-items-center mt-5">
        <img src="/images/DeadLose.svg" width="300" alt="Muerto">
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>La Palabra Era: ${generatedWord}</h1>
        <h3>Has Muerto................</h3>
        <p>¡Hey! ¿Quieres Intentarlo De Nuevo?</p>
        <a class="btn btn-secondary btn-lg" href="/users/game" role="button">Volver a Intentarlo</a>
      </div>
    </section>
    `;
}



module.exports = {
    gameView,
    winGameView,
    loseGameView
}