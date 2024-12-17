class Snowball {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.r = size / 2;
	}

	draw(ctx) {
		ctx.fillStyle = Color.snowShadow;
		ctx.strokeStyle = Color.snow;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = Color.snow;
		ctx.beginPath();
		ctx.arc(
			this.x - this.r / 20,
			this.y - this.r / 20,
			this.r - this.r / 12,
			0,
			Math.PI * 2
		);
		ctx.fill();
	}
}
