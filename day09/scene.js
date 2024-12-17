class Scene9 extends Scene8 {
	constructor(canvas) {
		super(canvas);
		this.carrot = new Carrot(300, canvas.height - 80, 70);
	}

	draw() {
		super.draw();
		this.carrot.draw(this.ctx);
	}
}
