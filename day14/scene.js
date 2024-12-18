class Scene14 extends Scene13 {
	constructor(canvas) {
		super(canvas);
		this.lights = [];
		for (let i = 0; i < 5; i++) {
			this.lights.push(
				new Light(
					randomBetween(canvas.width - 400, canvas.width - 100),
					randomBetween(canvas.height - 40, canvas.height - 10),
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
