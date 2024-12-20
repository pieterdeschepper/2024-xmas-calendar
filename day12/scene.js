class Scene12 extends Scene5 {
	constructor(canvas) {
		super(canvas);
		this.snowman = new Snowman(250, canvas.height - 240, 400);
	}

	update() {
		super.update();
		this.snowman.update(this.wind);
	}

	draw() {
		super.draw();
		this.snowman.draw(this.ctx);
	}
}
