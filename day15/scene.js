class Scene15 extends Scene13 {
	constructor(canvas) {
		super(canvas);
		this.cord = new Cord(canvas.width - 400, canvas.height - 50, 100, 5);
	}

	draw() {
		super.draw();
		this.cord.draw(this.ctx);
	}
}
