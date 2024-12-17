class Scene9 extends Scene2 {
	constructor(canvas) {
		super(canvas);
		this.snowman = new Snowman(250, canvas.height - 240, 400);
	}

	draw() {
		super.draw();
		this.snowman.draw(this.ctx);
	}
}
