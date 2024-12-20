class Scene14 extends Scene13 {
	constructor(canvas) {
		super(canvas);
		this.lights = [];
		for (let i = 0; i < 5; i++) {
			this.lights.push(
				new Light(
					canvas.width - 100 * (i + 1),
					randomBetween(canvas.height - 50, canvas.height - 20),
					20
				)
			);
		}
	}

	draw() {
		super.draw();
		for (let l of this.lights) {
			l.draw(this.ctx);
		}
	}
}
