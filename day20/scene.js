class Scene20 extends Scene19 {
	constructor(canvas) {
		super(canvas);
		const doorSize = this.cabin.size * 0.45;
		this.cabin.setDoor(
			new Door(
				this.cabin.x + doorSize * 0.4,
				this.cabin.y + this.cabin.size / 2 - doorSize / 2,
				doorSize
			)
		);
	}
}
