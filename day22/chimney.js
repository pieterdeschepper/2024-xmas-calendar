class Chimney {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw(ctx) {
		const width = this.size * 0.7;
		ctx.beginPath();
		ctx.fillStyle = Color.cabin;
		ctx.strokeStyle = Color.cabinShadow;
		ctx.lineWidth = this.size / 30;
		ctx.rect(this.x - width / 2, this.y - this.size / 2, width, this.size);
		ctx.fill();
		ctx.stroke();
		const topWidth = this.size * 0.9;
		ctx.beginPath();
		ctx.rect(
			this.x - topWidth / 2,
			this.y - this.size / 2,
			topWidth,
			this.size / 10
		);
		ctx.fill();
		ctx.stroke();
	}
}
