class Scene5 extends Scene4 {
	constructor(canvas) {
		super(canvas);
		this.snowballs = [
			new Snowball(100, canvas.height - 120, 50),
			new Snowball(150, canvas.height - 120, 50),
			new Snowball(200, canvas.height - 120, 50),
			new Snowball(125, canvas.height - 162, 50),
			new Snowball(175, canvas.height - 162, 50),
			new Snowball(150, canvas.height - 204, 50),
		];
	}

	draw() {
		super.draw();
		for (let s of this.snowballs) {
			s.draw(this.ctx);
		}
	}
}
