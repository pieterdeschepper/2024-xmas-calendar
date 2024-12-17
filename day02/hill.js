class Hill {
	constructor(x, y, size, dir = "left") {
		this.x = x;
		this.y = y;
		this.size = size;
		this.endPercentage = Math.random() * 0.3 + 0.7;
		this.dir = dir;
	}

	draw(ctx) {
		const left = 0;
		const top = ctx.canvas.height - this.size;

		ctx.fillStyle = Color.snow;
		ctx.lineWidth = 7;
		ctx.strokeStyle = Color.snowShadow;

		ctx.beginPath();
		if (this.dir === "left") {
			ctx.moveTo(left - 10, ctx.canvas.height);
			ctx.lineTo(left - 10, top);
			ctx.quadraticCurveTo(
				ctx.canvas.width * this.endPercentage,
				top,
				ctx.canvas.width * this.endPercentage,
				ctx.canvas.height
			);
		} else if (this.dir === "right") {
			ctx.moveTo(ctx.canvas.width + 10, ctx.canvas.height);
			ctx.lineTo(ctx.canvas.width + 10, top);
			ctx.quadraticCurveTo(
				ctx.canvas.width * (1 - this.endPercentage),
				top,
				ctx.canvas.width * (1 - this.endPercentage),
				ctx.canvas.height
			);
		}
		ctx.fill();
		ctx.stroke();
	}
}
