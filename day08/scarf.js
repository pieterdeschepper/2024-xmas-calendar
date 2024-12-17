class Scarf {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw(ctx) {
		const thickness = this.size * 0.2;
		const stripeWidth = thickness * 0.33;
		ctx.strokeStyle = Color.scarf;
		ctx.lineWidth = thickness;
		ctx.save();
		ctx.beginPath();
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.PI / 5);
		ctx.moveTo(-this.size * 0.05, 0);
		ctx.lineTo(this.size * 0.45, 0);
		ctx.stroke();
		ctx.strokeStyle = Color.scarfSecondary;
		ctx.setLineDash([stripeWidth, stripeWidth]);
		ctx.stroke();
		ctx.fillStyle = Color.scarf;
		for (let i = 0; i < 5; i++) {
			ctx.beginPath();
			ctx.fillRect(
				this.size * 0.45,
				(2 * i * thickness) / 9 - thickness / 2,
				this.size * 0.1,
				thickness / 9
			);
		}
		ctx.setLineDash([]);
		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = Color.scarf;
		ctx.lineCap = "round";
		ctx.moveTo(this.x - this.size * 0.3, this.y);
		ctx.lineTo(this.x + this.size * 0.3, this.y);
		ctx.stroke();
		ctx.strokeStyle = Color.scarfSecondary;
		ctx.lineCap = "butt";
		ctx.setLineDash([stripeWidth, stripeWidth]);
		ctx.stroke();
		ctx.restore();
	}
}
