class Button {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.r = size / 2;
	}

	draw(ctx) {
		ctx.fillStyle = Color.hat;
		ctx.strokeStyle = Color.hatShadow;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = Color.hatShadow;
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
