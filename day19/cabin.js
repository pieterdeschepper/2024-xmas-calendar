class Cabin {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.logCount = Math.round(randomBetween(8, 11));
		this.door = null;
		this.window = null;
		this.chimney = null;
	}

	setDoor(door) {
		this.door = door;
	}

	setWindow(window) {
		this.window = window;
	}

	setChimney(chimney) {
		this.chimney = chimney;
	}

	draw(ctx) {
		if (this.chimney) {
			this.chimney.draw(ctx); //Day 22
		}

		const logHeight = this.size / 2 / this.logCount;
		const logWidth = this.size * 0.9;
		const widthReduction = logWidth / this.logCount;
		for (let i = 0; i < this.logCount; i++) {
			new Log(
				this.x,
				this.y + (this.logCount - 1 - i) * logHeight + logHeight / 2,
				logWidth,
				logHeight
			).draw(ctx);
		}
		for (let i = this.logCount - 1; i >= 0; i--) {
			new Log(
				this.x,
				this.y - (this.logCount - 1 - i) * logHeight + logHeight / 2,
				logWidth - widthReduction * (this.logCount - 1 - i),
				logHeight
			).draw(ctx);
		}

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.PI / 4);
		new Log(0, -this.size * 0.31, this.size * 0.8, logHeight).draw(ctx);
		ctx.rotate(-Math.PI / 2);
		new Log(0, -this.size * 0.31, this.size * 0.8, logHeight).draw(ctx);
		ctx.restore();

		if (this.door) {
			this.door.draw(ctx); //Day 20
		}

		if (this.window) {
			this.window.draw(ctx); //Day 21
		}
	}
}

class Log {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	draw(ctx) {
		this.drawPart(
			ctx,
			this.x,
			this.y,
			this.width,
			this.height,
			Color.cabinShadow
		);
		this.drawPart(
			ctx,
			this.x - this.height / 12,
			this.y - this.height / 12,
			this.width - this.height / 12,
			this.height - this.height / 12,
			Color.cabin
		);
	}

	drawPart(ctx, x, y, width, height, color) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(x - width / 2 + height / 2, y - height / 2);
		ctx.lineTo(x + width / 2 - height / 2, y - height / 2);
		ctx.arc(
			x + width / 2 - height / 2,
			y,
			height / 2,
			-Math.PI / 2,
			Math.PI / 2
		);
		ctx.lineTo(x - width / 2 + height / 2, y + height / 2);
		ctx.arc(
			x - width / 2 + height / 2,
			y,
			height / 2,
			Math.PI / 2,
			-Math.PI / 2
		);
		ctx.fill();
	}
}
