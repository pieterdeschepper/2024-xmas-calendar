class Scene2 extends Scene1 {
	constructor(canvas) {
		super(canvas);
		this.moon = new Moon(canvas.width - 100, 100, 80);
	}

	draw() {
		super.draw();
		this.moon.draw(this.ctx);
	}
}
