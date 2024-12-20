class Window {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw(ctx) {
		const logHeight = this.size / 10;
		ctx.beginPath();
		ctx.fillStyle = Color.window;
		ctx.fillRect(
			this.x - this.size / 2 + logHeight / 2,
			this.y - this.size / 2 + logHeight / 2,
			this.size - logHeight,
			this.size - logHeight
		);

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(-Math.PI / 2);
		new Log(0, -this.size / 2, this.size, logHeight).draw(ctx);
		ctx.rotate(Math.PI);
		new Log(0, -this.size / 2, this.size, logHeight).draw(ctx);
		new Log(0, 0, this.size, logHeight / 2).draw(ctx);
		ctx.restore();
		new Log(this.x, this.y, this.size, logHeight / 2).draw(ctx);
		new Log(
			this.x,
			this.y - this.size / 2 + logHeight / 2,
			this.size * 1.1,
			logHeight
		).draw(ctx);
		new Log(
			this.x,
			this.y + this.size / 2 - logHeight / 2,
			this.size * 1.1,
			logHeight
		).draw(ctx);
	}
}
