class Cord {
	constructor(
		x,
		y,
		size,
		lights = Math.round(randomBetween(3, 5)),
		lightSize = 20,
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
		this.lightSize = lightSize;
	}

	render() {
		this.image = document.createElement("canvas");
		this.image.width = this.size;
		this.image.height = this.size;
		const ctx = this.image.getContext("2d");
		const x = this.size / 2;
		const y = this.size / 2;
		const startPoint = new Vector(x - this.size / 2, y);
		const endPoint = new Vector(x + this.size / 2, y);
		const controlPoint = new Vector(x, y + this.size / 2);
		ctx.beginPath();
		ctx.strokeStyle = Color.black;
		ctx.moveTo(startPoint.x, startPoint.y);
		ctx.quadraticCurveTo(
			controlPoint.x,
			controlPoint.y,
			endPoint.x,
			endPoint.y
		);
		ctx.stroke();
		const dist = this.size / this.lights / 2;
		const { data } = ctx.getImageData(
			0,
			0,
			this.image.width,
			this.image.height
		);
		ctx.beginPath();
		for (let i = 1; i < this.lights * 2; i += 2) {
			const lightX = Math.round(x - this.size / 2 + i * dist);
			const lightY = this.findIntersection(data, lightX);
			const deltaX = lightX + 3;
			const deltaY = this.findIntersection(data, deltaX);
			const degree = Math.atan2(deltaY - lightY, deltaX - lightX);
			const light = new Light(
				lightX,
				lightY + this.lightSize * 0.55,
				this.lightSize,
				degree
			);
			light.draw(ctx);
		}
	}

	findIntersection(imgData, x) {
		for (let j = x * 4; j < imgData.length; j += 4 * this.image.width) {
			if (imgData[j + 3] > 0) {
				return Math.floor(j / this.image.width / 4);
			}
		}
	}

	draw(ctx) {
		if (!this.image) {
			this.render();
		}
		ctx.beginPath();
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		ctx.drawImage(this.image, -this.size / 2, -this.size / 2);
		ctx.restore();
	}
}
