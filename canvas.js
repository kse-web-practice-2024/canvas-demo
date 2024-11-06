export class Canvas {
    ctx;
    constructor(element, width = 1100, height = 600) {
        this.ctx = element.getContext('2d');
        this.ctx.canvas.width = width;
        this.ctx.canvas.height = height;
        this.ctx.lineWidth = 5;
    }

    draw(path) {
        path.forEach(({ x, y, color }, index) => {
            this.ctx.strokeStyle = color;

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