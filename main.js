import { Canvas } from './canvas.js';
import { Paint } from './paint.js';

const canvasElement = document.querySelector('.canvas-js');

const canvas = new Canvas(canvasElement);

const paint = new Paint(canvas);


const undoButton = document.querySelector('.undo-button-js');

undoButton.addEventListener('click', () => {
    paint.undo();
})

const eraseButton = document.querySelector('.erase-button-js');
const drawButton = document.querySelector('.draw-button-js');

eraseButton.addEventListener('click', () => {
    paint.changeModeToErase();
    eraseButton.classList.add('active');
    drawButton.classList.remove('active');
})


drawButton.addEventListener('click', () => {
    paint.changeModeToDraw();
    drawButton.classList.add('active');
    eraseButton.classList.remove('active');
})