class Carrot {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw(ctx) {
		const r = this.size / 8;
		const left = this.x - this.size / 2 + r;
		const right = this.x + this.size / 2;
		ctx.fillStyle = Color.carrotShadow;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(left, this.y, r, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = Color.carrot;
		ctx.beginPath();
		ctx.arc(left - r / 20, this.y - r / 20, r - r / 12, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = Color.carrot;
		ctx.beginPath();
		ctx.moveTo(left + 1, this.y - r);
		ctx.lineTo(right, this.y);
		ctx.lineTo(left + 1, this.y + r);
		ctx.fill();
		ctx.strokeStyle = Color.black;
		ctx.beginPath();
		ctx.arc(left + r, this.y, r * 0.8, (3 * Math.PI) / 4, (-3 * Math.PI) / 4);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(
			left + (3 / 2) * r,
			this.y,
			r * 0.7,
			(3 * Math.PI) / 4,
			(-3 * Math.PI) / 4
		);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(
			left + 2 * r,
			this.y,
			r * 0.6,
			(3 * Math.PI) / 4,
			(-3 * Math.PI) / 4
		);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(
			left + (5 / 2) * r,
			this.y,
			r * 0.5,
			(3 * Math.PI) / 4,
			(-3 * Math.PI) / 4
		);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(
			left + 3 * r,
			this.y,
			r * 0.4,
			(3 * Math.PI) / 4,
			(-3 * Math.PI) / 4
		);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(
			left + (7 / 2) * r,
			this.y,
			r * 0.3,
			(3 * Math.PI) / 4,
			(-3 * Math.PI) / 4
		);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(
			left + 4 * r,
			this.y,
			r * 0.2,
			(3 * Math.PI) / 4,
			(-3 * Math.PI) / 4
		);
		ctx.stroke();
	}
}
