class Scene15 extends Scene13 {
	constructor(canvas) {
		super(canvas);
		this.cords = [
			new Cord(canvas.width / 16, 0, canvas.width / 8, 5, 20, 0),
			new Cord(
				canvas.width / 8 + canvas.width / 9,
				0,
				canvas.width / 4.5,
				7,
				20,
				0
			),
			new Cord(canvas.width / 2, 0, canvas.width / 3.3, 9, 20, 0),
			new Cord(
				canvas.width - canvas.width / 8 - canvas.width / 9,
				0,
				canvas.width / 4.5,
				7,
				20,
				0
			),
			new Cord((15 * canvas.width) / 16, 0, canvas.width / 8, 5, 20, 0),
		];
	}

	draw() {
		super.draw();
		for (const cord of this.cords) {
			cord.draw(this.ctx);
		}
	}
}
