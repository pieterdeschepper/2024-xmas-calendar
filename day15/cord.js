class Cord {
	constructor(
		x,
		y,
		size,
		lights = Math.round(randomBetween(3, 5)),
		rotation = randomBetween(-Math.PI / 4, Math.PI / 4),
		hue = randomBetween(0, 360)
	) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.hue = hue;
		this.image = null;
		this.rotation = rotation;
		this.lights = lights;
	}

	render(canvas) {
		const { width, height } = canvas;
		this.image = document.createElement("canvas");
		this.image.width = width;
		this.image.height = height;
		const ctx = this.image.getContext("2d");
		// ctx.beginPath();
		// ctx.strokeRect(
		// 	this.x - this.size / 2,
		// 	this.y - this.size / 2,
		// 	this.size,
		// 	this.size
		// );
		const startPoint = new Vector(this.x - this.size / 2, this.y);
		const endPoint = new Vector(this.x + this.size / 2, this.y);
		const controlPoint = new Vector(this.x, this.y + this.size / 2);
		ctx.beginPath();
		ctx.moveTo(startPoint.x, startPoint.y);
		ctx.quadraticCurveTo(
			controlPoint.x,
			controlPoint.y,
			endPoint.x,
			endPoint.y
		);
		ctx.stroke();
		ctx.beginPath();
		const dist = this.size / this.lights / 2;
		const { data } = ctx.getImageData(
			0,
			0,
			this.image.width,
			this.image.height
		);
		for (let i = 1; i < this.lights * 2; i += 2) {
			const x = this.x - this.size / 2 + i * dist;
			for (let j = x * 4; j < data.length; j += 4 * this.image.width) {
				if (data[j + 3] > 0) {
					let y = Math.floor(j / this.image.width / 4);
					const light = new Light(
						x,
						y + this.size / 20,
						this.size / 10,
						0
					);
					light.draw(ctx);
				}
			}
		}
	}

	draw(ctx) {
		if (!this.image) {
			this.render(ctx.canvas);
		}
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		ctx.drawImage(this.image, -this.x, -this.y);
		ctx.restore();
	}
}
