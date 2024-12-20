class Scene18 extends Scene17 {
	constructor(canvas) {
		super(canvas);
		this.bells = [new Bell(canvas.width / 2, 130, 60)];
	}

	draw() {
		super.draw();
		for (const b of this.bells) {
			b.draw(this.ctx);
		}
	}
}
