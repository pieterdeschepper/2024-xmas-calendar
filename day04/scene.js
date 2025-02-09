class Scene4 extends Scene3 {
	constructor(canvas) {
		super(canvas);
		this.hills = [new Hill(0, 0, 120), new Hill(0, 0, 80, "right")];
	}

	draw() {
		super.draw();
		for (let h of this.hills) {
			h.draw(this.ctx);
		}
	}
}
