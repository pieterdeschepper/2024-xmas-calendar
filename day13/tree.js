class Tree {
	constructor(x, y, size, rotation = 0) {
		this.x = x;
		this.y = y;
		this.angle = map(Math.random(), 0, 1, Math.PI / 6, Math.PI / 4);
		this.size = size;
		this.len = size / 4;
		this.rotation = rotation;
		this.image = null;
	}

	render(canvas) {
		//Render trunk and branches
		this.image = document.createElement("canvas");
		this.image.width = canvas.width;
		this.image.height = canvas.height;
		const ctx = this.image.getContext("2d");
		ctx.beginPath();
		ctx.save();
		ctx.strokeStyle = Color.black;
		ctx.translate(this.x, this.y + this.size / 2);
		ctx.rotate(this.rotation);
		this.branch(ctx, this.len, this.len * 0.2, true);
		ctx.restore();
		//Render leaves
		const { data } = ctx.getImageData(
			0,
			0,
			this.image.width,
			this.image.height
		);
		let branchPixels = [];
		for (let y = 0; y < this.image.height; y++) {
			for (let x = 0; x < this.image.width; x++) {
				let alpha = data[(y * this.image.width + x) * 4 + 3];

				if (alpha > 0 && y < this.y + this.size * 0.45) {
					branchPixels.push({ x, y });
				}
			}
		}

		for (const pixel of branchPixels) {
			if (Math.random() < 0.4) {
				ctx.beginPath();
				const green =
					(180 * (canvas.height - pixel.y)) / canvas.height + 20;
				ctx.fillStyle = "rgba(0," + green + ",0,0.4)";
				ctx.save();
				ctx.translate(pixel.x, pixel.y);
				ctx.rotate(randomBetween(0, Math.PI * 2));
				const leafSize = this.len / 30;
				ctx.arc(0, 0, leafSize, 0, Math.PI);
				ctx.fill();
				ctx.restore();
			}
		}
	}

	draw(ctx) {
		// ctx.lineWidth = 1;
		// ctx.strokeRect(
		// 	this.x - this.len * 2,
		// 	this.y - this.len * 2,
		// 	this.len * 4,
		// 	this.len * 4
		// );
		if (!this.image) {
			this.render(ctx.canvas);
		}
		ctx.drawImage(this.image, 0, 0);
	}

	branch(ctx, len, thickness, trunk = false) {
		const length = trunk ? len / 5 : len;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, -length);
		ctx.lineWidth = thickness;
		ctx.stroke();
		ctx.translate(0, -length);
		if (len > this.size / 100) {
			ctx.save();
			ctx.rotate(this.angle);
			this.branch(ctx, len * 0.5, thickness * 0.7);
			ctx.restore();
			ctx.save();
			ctx.rotate(0);
			this.branch(ctx, len * 0.8, thickness * 0.7);
			ctx.restore();
			ctx.save();
			ctx.rotate(-this.angle);
			this.branch(ctx, len * 0.5, thickness * 0.7);
			ctx.restore();
		}
	}
}
