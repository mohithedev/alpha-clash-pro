function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function getTextElementValueByID(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet() {
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');
    // console.log(alphabets);

    // get a random index 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}