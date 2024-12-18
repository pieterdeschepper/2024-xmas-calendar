class Light {
	constructor(
		x,
		y,
		size,
		rotation = randomBetween(-Math.PI / 4, Math.PI / 4),
		hue = randomBetween(0, 360)
	) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.hue = hue;
		this.image = null;
		this.rotation = rotation;
	}

	render(canvas) {
		const { width, height } = canvas;
		const tmp = document.createElement("canvas");
		tmp.width = width;
		tmp.height = height;
		const ctx = tmp.getContext("2d");

		ctx.beginPath();
		ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`;
		const bulbCenterOffset = new Vector(0, (this.size / 2) * 0.15);
		ctx.arc(
			this.x + bulbCenterOffset.x,
			this.y + bulbCenterOffset.y,
			(this.size / 2) * 0.85,
			0,
			Math.PI * 2
		);
		ctx.fill();

		this.image = document.createElement("canvas");
		this.image.width = width;
		this.image.height = height;
		const ctxImage = this.image.getContext("2d");
		ctxImage.filter = "blur(" + Math.round(this.size / 10) + "px)";
		ctxImage.drawImage(tmp, 0, 0);
		ctxImage.filter = "none";
		ctxImage.drawImage(tmp, 0, 0);
		ctxImage.fillStyle = Color.black;
		ctxImage.save();
		ctxImage.translate(
			this.x + bulbCenterOffset.x,
			this.y + bulbCenterOffset.y
		);
		ctxImage.rotate(this.rotation);
		ctxImage.fillRect(
			-this.size / 3,
			-this.size / 2 - bulbCenterOffset.y,
			(2 * this.size) / 3,
			this.size / 3.3
		);
		ctx.restore();
	}

	draw(ctx) {
		if (!this.image) {
			this.render(ctx.canvas);
		}
		ctx.beginPath();
		ctx.drawImage(this.image, 0, 0);
	}
}
