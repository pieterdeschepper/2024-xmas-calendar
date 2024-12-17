class Hat {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.width = this.size * map(Math.random(), 0, 1, 0.35, 0.55);
		this.angle = 0;
		this.sideSpeed = 0;
	}

	update(wind, ctx) {
		this.angle += 0.01;
		this.sideSpeed += wind;
		this.sideSpeed = constrain(this.sideSpeed, -3, 3);
		this.x += this.sideSpeed;
	}

	draw(ctx) {
		const height = this.size * 0.5;
		const width = this.width;
		const rimRadius = width * 0.9;
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.beginPath();
		ctx.fillStyle = Color.hatShadow;
		ctx.ellipse(0, height / 2, rimRadius, rimRadius / 6, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = Color.hat;
		ctx.fillRect(-width / 2, -height / 2, width, height);
		ctx.beginPath();
		ctx.fillStyle = Color.hat;
		ctx.ellipse(0, height / 2, width / 2, width / 12, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = Color.hatShadow;
		ctx.ellipse(0, -height / 2, width / 2, width / 12, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
}
