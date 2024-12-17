class Stick {
	constructor(x, y, size, rotation = 0) {
		this.x = x;
		this.y = y;
		this.angle = map(Math.random(), 0, 1, Math.PI / 12, Math.PI / 6);
		this.len = size / 4;
		this.rotation = rotation;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.save();
		ctx.strokeStyle = Color.black;
		ctx.translate(this.x, this.y + this.len * 1.5);
		ctx.rotate(this.rotation);
		this.branch(ctx, this.len, this.len * 0.07);
		ctx.restore();
	}

	branch(ctx, len, thickness) {
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, -len);
		ctx.lineWidth = thickness;
		ctx.stroke();
		ctx.translate(0, -len);
		if (len > 5) {
			ctx.save();
			ctx.rotate(this.angle);
			this.branch(ctx, len * 0.67, thickness * 0.8);
			ctx.restore();
			ctx.save();
			ctx.rotate(-this.angle);
			this.branch(ctx, len * 0.67, thickness * 0.8);
			ctx.restore();
		}
	}
}
