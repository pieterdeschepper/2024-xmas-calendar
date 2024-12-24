class Smoke {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size / 4;
		this.opacity = 255;
	}

	update(wind) {
		this.opacity -= 1;
		this.size += 0.1;
		this.y -= 0.5;
		this.x += wind * 3;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Color.smoke + this.opacity.toString(16).padStart(2, "0");
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
		ctx.arc(
			this.x + this.size / 10,
			this.y + this.size / 10,
			this.size,
			0,
			Math.PI * 2
		);
		ctx.arc(
			this.x - this.size / 10,
			this.y + this.size / 10,
			this.size,
			0,
			Math.PI * 2
		);
		ctx.arc(
			this.x - this.size / 10,
			this.y - this.size / 10,
			this.size,
			0,
			Math.PI * 2
		);
		ctx.arc(
			this.x + this.size / 10,
			this.y - this.size / 10,
			this.size,
			0,
			Math.PI * 2
		);
		ctx.fill();
	}
}
