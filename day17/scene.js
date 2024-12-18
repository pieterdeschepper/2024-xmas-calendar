class Scene17 extends Scene15 {
	constructor(canvas) {
		super(canvas);
		this.tree = new XmasTree(canvas.width - 200, canvas.height - 270, 400);
	}

	draw() {
		super.draw();
	}
}
