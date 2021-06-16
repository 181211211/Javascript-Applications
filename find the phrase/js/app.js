

let game;
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});


const keyBoard = document.getElementById('qwerty');
keyBoard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});


document.addEventListener('keydown', (event) => {
    const key = document.getElementsByClassName('key');
    for (let i = 0; i < key.length; i++) {
        if (event.key === key[i].textContent) {
            if (key[i].disabled === false) {
                game.handleInteraction(key[i]);
            } else {
                return false
            }
        }
    }
});
