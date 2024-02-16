// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home_screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // step-2: show the playground
//     const playSection = document.getElementById('play_ground');
//     // console.log(playSection.classList);
//     playSection.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('Player pressed: ', playerPressed);

    
    // stop the game if pressed the 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // get the exacted to press
    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const exactedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, exactedAlphabet);

    // check matched or not
    if (playerPressed === exactedAlphabet) {
        console.log('you get a point');
        // console.log('you have pressed correctly', exactedAlphabet);

        //----------------------------------------------------------------------
        // update score:
        // 1: get the current score 
        // const currentScoreElement = document.getElementById('current_score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // 2: increase the score by 1
        // const newScore = currentScore + 1;

        // 3: show the update score
        // currentScoreElement.innerText = newScore
        //----------------------------------------------------------------------

        // another way
        const currentScore = getTextElementValueById('current_score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current_score', updatedScore);

        // start a new round 
        const element = document.getElementById(exactedAlphabet);
        element.classList.remove('bg-orange-400');
        continueGame();
    } else {
        console.log('you missed,you lost a life.');
        // step-1: get the current life number.
        // const currentLifeElement = document.getElementById('current_life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // step-2: reduce the life count 
        // const newLife = currentLife - 1;

        // step-3: display the updated life count 
        // currentLifeElement.innerText = newLife;

        //----------------------------------------------------------------------
        const currentLife = getTextElementValueById('current_life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current_life', updateLife);
        if (updateLife === 0) {
            gameOver()
        }
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet: ', alphabet);

    // stet-2: set randomly generated alphabet to the screen (show it).
    const currentAlphabetElement = document.getElementById('current_alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play() {
    // hide everything show only the playground
    hideElementById('home_screen');
    hideElementById('final_score');
    showElementById('play_ground');

    // reset score and life
    setTextElementValueById('current_life', 5);
    setTextElementValueById('current_score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play_ground');
    showElementById('final_score');

    // update final score
    // step-1: get the final score
    const gameScore = getTextElementValueById('current_score');
    setTextElementValueById('game_score', gameScore);

    // step-2: clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current_alphabet');
    const element = document.getElementById(currentAlphabet);
    element.classList.remove('bg-orange-400');
}