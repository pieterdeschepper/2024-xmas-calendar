class Scene11 extends Scene10 {
	constructor(canvas) {
		super(canvas);
		this.scarf = new Scarf(450, canvas.height - 120, 100);
	}

	draw() {
		super.draw();
		this.scarf.draw(this.ctx);
	}
}
