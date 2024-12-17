class Scene8 extends Scene7 {
	constructor(canvas) {
		super(canvas);
		this.buttons = [
			new Button(canvas.width - 300, canvas.height - 50, 10),
			new Button(canvas.width - 400, canvas.height - 30, 10),
			new Button(canvas.width - 420, canvas.height - 50, 10),
			new Button(canvas.width - 450, canvas.height - 40, 10),
		];
	}

	draw() {
		super.draw();
		for (let b of this.buttons) {
			b.draw(this.ctx);
		}
	}
}
