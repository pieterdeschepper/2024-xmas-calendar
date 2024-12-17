class Scene1 extends Scene {
	constructor(canvas) {
		super(canvas);
		this.stars = [];
		let rowCount = Math.round(randomBetween(5, 10));
		let colCount = Math.round(randomBetween(4, 6));
		const height = this.canvas.height - 100;
		for (let i = 0; i < rowCount; i++) {
			for (let j = 0; j < colCount; j++) {
				const x = randomBetween(
					(i * this.canvas.width) / rowCount,
					((i + 1) * this.canvas.width) / rowCount
				);
				const y = randomBetween(
					(j * height) / colCount,
					((j + 1) * height) / colCount
				);
				this.stars.push(new Star(x, y, randomBetween(20, 30)));
			}
		}
	}

	draw() {
		super.draw();
		for (let s of this.stars) {
			s.draw(this.ctx);
		}
	}
}
