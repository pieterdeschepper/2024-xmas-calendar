class Scene24 extends Scene23 {
	constructor(canvas) {
		super(canvas);
		this.text = new Text(this.canvas.width / 2, 250, 72, "Happy holidays!");
	}

	draw() {
		super.draw();

		this.text.draw(this.ctx);
	}
}
