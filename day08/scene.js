class Scene8 extends Scene7 {
	constructor(canvas) {
		super(canvas);
		this.hat = new Hat(this.canvas.width / 2, this.canvas.height - 400, 100);
	}

	update() {
		super.update();
		this.hat.update(this.wind);
		if (this.hat.x > this.canvas.width * 1.1) {
			this.hat.x = -this.canvas.width * 0.1;
		}

		if (this.hat.x < -this.canvas.width * 0.1) {
			this.hat.x = this.canvas.width * 1.1;
		}
	}

	draw() {
		super.draw();
		this.hat.draw(this.ctx);
	}
}
