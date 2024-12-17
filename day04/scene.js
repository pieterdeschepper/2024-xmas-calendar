class Scene4 extends Scene3 {
	constructor(canvas) {
		super(canvas);
		this.sticks = [
			new Stick(canvas.width - 150, canvas.height - 100, 150, Math.PI / 3),
			new Stick(canvas.width - 200, canvas.height - 100, 120, -Math.PI / 3),
		];
	}

	draw() {
		super.draw();
		for (let s of this.sticks) {
			s.draw(this.ctx);
		}
	}
}
