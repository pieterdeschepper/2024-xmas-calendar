class Scene22 extends Scene21 {
	constructor(canvas) {
		super(canvas);
		this.cabin.setChimney(
			new Chimney(
				this.cabin.x + this.cabin.size * 0.2,
				this.cabin.y - this.cabin.size * 0.3,
				50
			)
		);
	}
}
