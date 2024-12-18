class Scene13 extends Scene12 {
	constructor(canvas) {
		super(canvas);
		this.tree = new Tree(canvas.width - 200, canvas.height - 270, 400);
		this.hills.pop();
		this.hillsForeground = [new Hill(0, 0, 80, "right")];
	}

	draw() {
		super.draw();
		this.tree.draw(this.ctx);
		for (let h of this.hillsForeground) {
			h.draw(this.ctx);
		}
	}
}
