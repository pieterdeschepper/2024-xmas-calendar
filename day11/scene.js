class Scene11 extends Scene4 {
	constructor(canvas) {
		super(canvas);
		this.snowman = new Snowman(250, canvas.height - 240, 400);
	}

	draw() {
		super.draw();
		this.snowman.draw(this.ctx);
	}
}