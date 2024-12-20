class Scene19 extends Scene18 {
	constructor(canvas) {
		super(canvas);
		this.cabin = new Cabin(canvas.width / 2, canvas.height - 235, 300);
	}

	draw() {
		super.draw();
		this.cabin.draw(this.ctx);
		for (let h of this.hills) {
			h.draw(this.ctx);
		}
		this.snowman.draw(this.ctx);
		for (let h of this.hillsForeground) {
			h.draw(this.ctx);
		}
	}
}
