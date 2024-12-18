class Cloud {
	constructor(x, y, size, canvas = null) {
		this.direction = Math.random() < 0.5 ? -1 : 1;
		this.x = x - size * 0.4;
		if (canvas) {
			this.x = this.direction > 0 ? -size * 2 : canvas.width + size;
		}
		console.log(this.x, this.direction);
		this.y = y + size * 0.2;
		this.size = size;
		this.cloud = [];

		this.generate();
	}

	generate() {
		let parts = randomBetween(2, 3);
		let x = 0;
		let minR = Infinity;
		for (let i = 0; i < parts; i++) {
			let r = randomBetween(
				(this.size / parts) * 0.4,
				(this.size / parts) * 0.5
			);
			x += r;
			let y = -r;
			this.cloud.push(new CloudParticle(x, y, r));
			minR = Math.min(r, minR);
		}

		x = 0;

		for (let i = 0; i < parts - 1; i++) {
			x += this.cloud[i].r;
			let r = randomBetween(
				(this.size / parts) * 0.2,
				(this.size / parts) * 0.4
			);
			let y = -r - minR;
			this.cloud.push(new CloudParticle(x, y, r));
		}
	}

	update() {
		this.x += this.direction;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.save();
		ctx.translate(this.x, this.y);

		for (let p of this.cloud) {
			p.drawBottomLayer(ctx);
		}
		for (let p of this.cloud) {
			p.drawTopLayer(ctx);
		}
		ctx.restore();
	}
}

class CloudParticle {
	constructor(x, y, radius) {
		this.pos = new Vector(x, y);
		this.r = radius;
	}

	drawBottomLayer(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Color.cloudShadow;
		ctx.arc(this.pos.x, this.pos.y, this.r * 2, 0, Math.PI * 2);
		ctx.fill();
	}

	drawTopLayer(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Color.cloud;
		ctx.arc(
			this.pos.x - this.r / 20,
			this.pos.y - this.r / 20,
			this.r * 2 - this.r / 6,
			0,
			Math.PI * 2
		);
		ctx.fill();
	}
}
