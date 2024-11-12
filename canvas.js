export class Canvas {
    ctx;
    constructor(element, width = 1100, height = 600) {
        this.ctx = element.getContext('2d');
        this.ctx.canvas.width = width;
        this.ctx.canvas.height = height;
    }

    get element() {
        return this.ctx.canvas;
    }

    draw(path) {
        this.ctx.beginPath();
        path.forEach(({ x, y, color, lineWidth }, index) => {
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = lineWidth;

            if (index === 0) {
                this.ctx.moveTo(x, y);
            }

            this.ctx.lineTo(x, y);
        })

        this.ctx.stroke();
    }

    clean() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}