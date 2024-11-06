const IDLE = 'idle';
const ACTIVE = 'active';

const DRAW = 'draw';
const ERASE = 'erase';


export class Paint {
    currentPath = [];
    allPaths = [];
    state = IDLE;
    mode = DRAW; // DRAW | ERASE
    canvas;

    constructor(canvas) {
        this.canvas = canvas;
        document.addEventListener('mousemove', (event) => {
            if (this.state === ACTIVE) {
                this.currentPath.push({ x: event.offsetX, y: event.offsetY, color: this.mode === DRAW ? '#000' : '#fff' });

                canvas.draw(this.currentPath);
            }
        })

        this.initState();
    }

    initState() {
        document.addEventListener('mousedown', () => {
            this.state = ACTIVE;
        })

        document.addEventListener('mouseup', () => {
            this.state = IDLE;
            this.allPaths.push(this.currentPath);
            this.currentPath = [];
        })
    }

    undo() {
        this.allPaths.pop();
        this.canvas.clean();

        this.allPaths.forEach(path => {
            this.canvas.draw(path);
        })
    }

    changeModeToErase() {
        this.mode = ERASE;
    }

    changeModeToDraw() {
        this.mode = DRAW;
    }
}