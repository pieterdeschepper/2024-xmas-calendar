class Scene21 extends Scene20 {
	constructor(canvas) {
		super(canvas);
		const windowSize = this.cabin.size * 0.25;
		this.cabin.setWindow(
			new Window(
				this.cabin.x - windowSize * 0.6,
				this.cabin.y + windowSize * 0.8,
				windowSize
			)
		);
	}
}
