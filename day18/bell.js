class Bell {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw(ctx) {
		const thickness = this.size * 0.05;
		const ringR = this.size * 0.1;
		ctx.strokeStyle = Color.bellRing;
		ctx.lineWidth = thickness;
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y - this.size / 2 + ringR + thickness / 2,
			ringR - thickness / 2,
			0,
			Math.PI * 2
		);
		ctx.stroke();

		const clapperR = this.size * 0.1;
		ctx.fillStyle = Color.bellClapper;
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y + this.size / 2 - clapperR,
			clapperR,
			0,
			Math.PI * 2
		);
		ctx.fill();

		const highlight = new Vector(this.x - this.size * 0.1, this.y);
		const grd = ctx.createRadialGradient(
			highlight.x,
			highlight.y,
			0,
			highlight.x,
			highlight.y,
			this.size
		);
		this.hue = 45;
		grd.addColorStop(0, `hsl(${this.hue}, 100%, 70%)`);
		grd.addColorStop(0.3, `hsl(${this.hue}, 100%, 50%)`);
		grd.addColorStop(1, `hsl(${this.hue}, 100%, 10%)`);
		ctx.fillStyle = grd;
		ctx.beginPath();
		const top = this.y - this.size / 2 + ringR * 2;
		const bottom = this.y + this.size / 2 - clapperR;
		ctx.moveTo(this.x, top);
		ctx.bezierCurveTo(
			this.x - this.size * 0.28,
			top,
			this.x - this.size * 0.28,
			bottom,
			this.x - this.size * 0.5,
			bottom
		);
		ctx.lineTo(this.x + this.size * 0.5, bottom);
		ctx.bezierCurveTo(
			this.x + this.size * 0.28,
			bottom,
			this.x + this.size * 0.28,
			top,
			this.x,
			top
		);
		ctx.fill();
	}
}
