class Scene5 extends Scene4 {
	constructor(canvas) {
		super(canvas);
		this.clouds = [];
	}

	update() {
		super.update();

		const cloudSize = randomBetween(70, 90);

		if (this.frameCount % 240 == 1) {
			this.clouds.push(
				new Cloud(
					0,
					randomBetween(30, this.canvas.height / 3),
					cloudSize,
					this.canvas
				)
			);
		}

		for (let i = this.clouds.length - 1; i >= 0; i--) {
			const c = this.clouds[i];
			c.update();
			if (c.x < -200 || c > this.canvas.width) {
				this.clouds.splice(i, 1);
			}
		}
	}

	draw() {
		super.draw();
		for (let c of this.clouds) {
			c.draw(this.ctx);
		}
	}
}
