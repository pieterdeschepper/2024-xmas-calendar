class Scene3 extends Scene2 {
	constructor(canvas) {
		super(canvas);
		this.snowflakes = [];
	}

	update() {
		super.update();
		if (this.frameCount % 30 == 1) {
			this.snowflakes.push(
				new Snowflake(
					randomBetween(20, this.canvas.width - 20),
					randomBetween(-20, -150),
					randomBetween(10, 25)
				)
			);
		}

		for (let i = this.snowflakes.length - 1; i >= 0; i--) {
			this.snowflakes[i].update(this.wind);
			if (this.snowflakes[i].y > this.canvas.height) {
				this.snowflakes.splice(i, 1);
			}
		}
	}

	draw() {
		super.draw();
		for (let s of this.snowflakes) {
			s.draw(this.ctx);
		}
	}
}
