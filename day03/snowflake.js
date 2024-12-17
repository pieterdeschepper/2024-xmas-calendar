class Snowflake {
	constructor(x, y, size) {
		this.particles = [];
		this.x = x;
		this.y = y;
		this.size = size;
		this.speed = randomBetween(0.5, 1);
		this.sideSpeed = 0;
		this.rotation = randomBetween(0, Math.PI * 2);
		this.rotationDirection = Math.random() > 0.5 ? 1 : -1;
		this.generate(this.size / 2);
	}

	generate(size) {
		let current = new SnowflakeParticle(size);
		let count = 0;
		while (true) {
			count = 0;

			while (!current.finished() && !current.intersects(this.particles)) {
				current.update();
				count++;
			}

			if (count === 0) {
				return;
			}

			this.particles.push(current);
			current = new SnowflakeParticle(size);
		}
	}

	update(wind) {
		this.rotation += 0.01 * this.rotationDirection;
		this.sideSpeed += wind;
		this.sideSpeed = constrain(this.sideSpeed, -0.5, 0.5);
		this.x += this.sideSpeed;
		this.y += this.speed;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Color.snow;

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);

		for (let i = 0; i < 6; i++) {
			ctx.rotate(Math.PI / 3);
			for (let p of this.particles) {
				p.draw(ctx);
			}

			ctx.save();
			ctx.scale(1, -1);
			for (let p of this.particles) {
				p.draw(ctx);
			}
			ctx.restore();
		}
		ctx.restore();
	}
}

class SnowflakeParticle {
	constructor(radius) {
		this.pos = Vector.fromAngle(0).multiply(radius);
		this.r = Math.max(radius / 30, 0.2);
	}

	update() {
		this.pos.x -= 1;
		this.pos.y += randomBetween(-3, 3);

		let angle = this.pos.getAngle();
		angle = constrain(angle, 0, Math.PI / 6);
		let magnitude = this.pos.getMagnitude();
		this.pos = Vector.fromAngle(angle);
		this.pos.setMagnitude(magnitude);
	}

	intersects(snowflake) {
		for (let s of snowflake) {
			let dist = this.pos.subtract(s.pos).getMagnitude();
			if (dist < this.r * 2) {
				return true;
			}
		}
		return false;
	}

	finished() {
		return this.pos.x < 1;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
		ctx.fill();
	}
}
