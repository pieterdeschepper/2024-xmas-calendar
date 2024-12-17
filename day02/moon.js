class Moon {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.r = size / 2;
		const craterChance = randomBetween(0.2, 0.4);
		this.craters = [];
		let angle = 0;
		do {
			if (Math.random() < craterChance) {
				let cratorRadius = randomBetween(this.r / 8, this.r / 5);
				let distance = randomBetween(this.r / 5, this.r - cratorRadius);
				let craterX = this.x + Math.cos(angle) * distance;
				let craterY = this.y + Math.sin(angle) * distance;
				this.craters.push(new Crater(craterX, craterY, cratorRadius));
			}
			angle += Math.PI / 6;
		} while (angle < Math.PI * 2);

		this.image = null;
	}

	render(canvas) {
		const { width, height } = canvas;
		const tmp = document.createElement("canvas");
		tmp.width = width;
		tmp.height = height;
		const ctx = tmp.getContext("2d");

		ctx.beginPath();
		ctx.fillStyle = Color.moon;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		ctx.fill();
		for (let crater of this.craters) {
			crater.draw(ctx);
		}

		ctx.globalCompositeOperation = "destination-out";
		ctx.beginPath();
		ctx.fillStyle = Color.black;
		const sunX = randomBetween(this.x - this.r, this.x + this.r);
		const sunY = randomBetween(this.y - this.r, this.y + this.r);
		ctx.arc(sunX, sunY, this.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.globalCompositeOperation = "source-over";

		this.image = document.createElement("canvas");
		this.image.width = width;
		this.image.height = height;
		const ctxImage = this.image.getContext("2d");
		ctxImage.filter = "blur(10px)";
		ctxImage.drawImage(tmp, 0, 0);
		ctxImage.filter = "none";
		ctxImage.drawImage(tmp, 0, 0);
	}

	draw(ctx) {
		if (!this.image) {
			this.render(ctx.canvas);
		}
		ctx.drawImage(this.image, 0, 0);
	}
}

class Crater {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.r = radius;
	}

	draw(ctx) {
		ctx.fillStyle = Color.moonCraterShadow;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = Color.moonCrater;
		ctx.beginPath();
		ctx.arc(
			this.x - this.r / 20,
			this.y - this.r / 20,
			this.r - this.r / 12,
			0,
			Math.PI * 2
		);
		ctx.fill();
	}
}
