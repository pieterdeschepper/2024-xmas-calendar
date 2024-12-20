class Door {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw(ctx) {
		const width = this.size / 2;
		const logHeight = this.size / 20;
		ctx.beginPath();
		ctx.fillStyle = Color.door;
		ctx.fillRect(
			this.x - width / 2,
			this.y - this.size / 2 + logHeight,
			width,
			this.size - logHeight
		);

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(-Math.PI / 2);
		new Log(0, -width / 2, this.size, logHeight).draw(ctx);
		ctx.rotate(Math.PI);
		new Log(0, -width / 2, this.size, logHeight).draw(ctx);
		ctx.restore();
		new Log(
			this.x,
			this.y - this.size / 2 + logHeight / 2,
			width * 1.1,
			logHeight
		).draw(ctx);

		new Button(this.x + width * 0.37, this.y, width / 8).draw(ctx);
	}
}
