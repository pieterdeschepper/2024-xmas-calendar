class Star {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.outerR = size / 2;
		this.innerR = randomBetween(this.outerR * 0.1, this.outerR * 0.4);
		this.points = Math.round(randomBetween(4, 8));
		this.rotation = randomBetween(0, Math.PI * 2);
		this.image = null;
	}

	render(canvas) {
		const { width, height } = canvas;
		const tmp = document.createElement("canvas");
		tmp.width = width;
		tmp.height = height;
		const ctx = tmp.getContext("2d");

		ctx.beginPath();
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		for (let i = 0; i < 2 * Math.PI; i += (2 * Math.PI) / this.points) {
			let x = Math.cos(i) * this.outerR;
			let y = Math.sin(i) * this.outerR;
			ctx.lineTo(x, y);
			x = Math.cos(i + Math.PI / this.points) * this.innerR;
			y = Math.sin(i + Math.PI / this.points) * this.innerR;
			ctx.lineTo(x, y);
		}
		ctx.fillStyle = Color.moon;
		ctx.fill();
		ctx.restore();

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
