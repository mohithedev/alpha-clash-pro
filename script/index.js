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
function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet: ', alphabet);

    // stet-2: set randomly generated alphabet to the screen (show it).
    const currentAlphabetElement = document.getElementById('current_alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home_screen');
    showElementById('play_ground');
    continueGame();
}