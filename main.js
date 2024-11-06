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

eraseButton.addEventListener('click', () => {
    paint.changeModeToErase();
})

const drawButton = document.querySelector('.draw-button-js');

drawButton.addEventListener('click', () => {
    paint.changeModeToDraw();
})