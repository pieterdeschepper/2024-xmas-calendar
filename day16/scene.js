class Scene16 extends Scene15 {
	constructor(canvas) {
		super(canvas);
		this.balls = [];
		for (let i = 0; i < 5; i++) {
			this.balls.push(
				new Ball(
					canvas.width - 100 * (i + 1),
					randomBetween(canvas.height - 50, canvas.height - 20),
					25
				)
			);
		}
	}

	draw() {
		super.draw();
		for (let b of this.balls) {
			b.draw(this.ctx);
		}
	}
}
