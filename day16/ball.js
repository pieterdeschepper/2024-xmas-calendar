class Ball {
	constructor(x, y, size, hue = randomBetween(0, 360)) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.hue = hue;
	}

	draw(ctx) {
		const thickness = this.size * 0.05;
		const ringR = this.size * 0.1;
		ctx.strokeStyle = `hsl(${this.hue}, 100%, 20%)`;
		ctx.lineWidth = thickness;
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y - this.size / 2 + ringR + thickness / 2,
			ringR,
			0,
			Math.PI * 2
		);
		ctx.stroke();
		const ballR = this.size * 0.45;
		ctx.beginPath();
		const highlight = new Vector(this.x - ballR * 0.2, this.y - ballR * 0.2);
		const grd = ctx.createRadialGradient(
			highlight.x,
			highlight.y,
			0,
			highlight.x,
			highlight.y,
			ballR * 2
		);
		grd.addColorStop(0, `hsl(${this.hue}, 100%, 70%)`);
		grd.addColorStop(0.3, `hsl(${this.hue}, 100%, 50%)`);
		grd.addColorStop(1, `hsl(${this.hue}, 100%, 10%)`);
		ctx.fillStyle = grd;
		ctx.arc(
			this.x,
			this.y - this.size / 2 + ringR + ballR,
			ballR,
			0,
			Math.PI * 2
		);
		ctx.fill();
	}
}
