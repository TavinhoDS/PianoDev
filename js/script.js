const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector('.checkbox__keys')
const switcher = document.querySelector('.switcher')
const keysSection = document.querySelector('.piano__keys')

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black-pressed')
        return;

    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {
    

    if (key.className.includes('black')) {
        key.classList.remove('black-pressed');
        return;

    }

    key.style.background = 'white';
}

keys.forEach((key) => {


    key.addEventListener('mousedown', () => handleMouseUp(key)) 


    key.addEventListener('mouseup', () => handleMouseUp(key)) 
});

checkbox.addEventListener('change' , ({target}) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys')
        return;
    }

    switcher.classList.remove('switcher--active')
    keysSection.classList.add('disabled-keys')
}); 

const keyDownMapper = {
    "a": () => handleMouseDown(keys[0]),
    "s": () => handleMouseDown(keys[1]),
    "d": () => handleMouseDown(keys[2]),
    "f": () => handleMouseDown(keys[3]),
    "g": () => handleMouseDown(keys[4]),
    "h": () => handleMouseDown(keys[5]),
    "j": () => handleMouseDown(keys[6]),
    "k": () => handleMouseDown(keys[7]),
    "l": () => handleMouseDown(keys[8]),
    "ç": () => handleMouseDown(keys[9]),
    "q": () => handleMouseDown(keys[10]),
    "w": () => handleMouseDown(keys[12]),
    "e": () => handleMouseDown(keys[13]),
    "r": () => handleMouseDown(keys[14]),
    "t": () => handleMouseDown(keys[15]),
    "y": () => handleMouseDown(keys[16]),
    "u": () => handleMouseDown(keys[17]),
    "i": () => handleMouseDown(keys[18]),
    "o": () => handleMouseDown(keys[19]),
    "p": () => handleMouseDown(keys[20]),
    "z": () => handleMouseDown(keys[21]),
    "x": () => handleMouseDown(keys[22]),
    "c": () => handleMouseDown(keys[23]),
    "v": () => handleMouseDown(keys[24])
}

const keyUpMapper = {
    "a": () => handleMouseUp(keys[0]),
    "s": () => handleMouseUp(keys[1]),
    "d": () => handleMouseUp(keys[2]),
    "f": () => handleMouseUp(keys[3]),
    "g": () => handleMouseUp(keys[4]),
    "h": () => handleMouseUp(keys[5]),
    "j": () => handleMouseUp(keys[6]),
    "k": () => handleMouseUp(keys[7]),
    "l": () => handleMouseUp(keys[8]),
    "ç": () => handleMouseUp(keys[9]),
    "q": () => handleMouseUp(keys[10]),
    "w": () => handleMouseUp(keys[12]),
    "e": () => handleMouseUp(keys[13]),
    "r": () => handleMouseUp(keys[14]),
    "t": () => handleMouseUp(keys[15]),
    "y": () => handleMouseUp(keys[16]),
    "u": () => handleMouseUp(keys[17]),
    "i": () => handleMouseUp(keys[18]),
    "o": () => handleMouseUp(keys[19]),
    "p": () => handleMouseUp(keys[20]),
    "z": () => handleMouseUp(keys[21]),
    "x": () => handleMouseUp(keys[22]),
    "c": () => handleMouseUp(keys[23]),
    "v": () => handleMouseUp(keys[24])
}

document.addEventListener('keydown' , (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup' , (event) => {
    keyUpMapper[event.key]()
});

