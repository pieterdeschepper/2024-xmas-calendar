class Snowman {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;

		const reduction = 1.5;
		let currentCenter = y + size / 2;
		let currentSize = 0.45 * size;

		let buttonSize = size * 0.03;

		this.snowBalls = [];
		this.sticks = [];
		this.buttons = [];
		this.carrot = null;

		for (let i = 0; i < 3; i++) {
			currentCenter -= currentSize / 2;
			this.snowBalls.push(new Snowball(x, currentCenter, currentSize));
			//Bottom ball
			if (i == 0) {
				this.buttons.push(
					new Button(x, currentCenter + currentSize * 0.3, buttonSize)
				);
				this.buttons.push(new Button(x, currentCenter, buttonSize));
				this.buttons.push(
					new Button(x, currentCenter - currentSize * 0.3, buttonSize)
				);
			}
			//Middle ball
			if (i == 1) {
				this.buttons.push(
					new Button(x, currentCenter + currentSize * 0.2, buttonSize)
				);
				this.buttons.push(
					new Button(x, currentCenter - currentSize * 0.2, buttonSize)
				);
				this.sticks.push(
					new Stick(
						x - currentSize * 0.4,
						currentCenter - currentSize * 0.55,
						size / 3,
						-Math.PI / 3
					)
				);
				this.sticks.push(
					new Stick(
						x + currentSize * 0.4,
						currentCenter - currentSize * 0.55,
						size / 3,
						Math.PI / 3
					)
				);
			}
			//Top ball
			if (i == 2) {
				//Eyes
				this.buttons.push(
					new Button(
						this.x - currentSize / 6,
						currentCenter - currentSize / 6,
						buttonSize
					)
				);
				this.buttons.push(
					new Button(
						this.x + currentSize / 6,
						currentCenter - currentSize / 6,
						buttonSize
					)
				);

				//Mouth
				for (let i = 0; i < 6; i++) {
					let angle = map(i, 0, 5, Math.PI / 6, (5 * Math.PI) / 6);
					this.buttons.push(
						new Button(
							this.x + (currentSize / 4) * Math.cos(angle),
							currentCenter +
								(currentSize / 4) * Math.sin(angle) +
								currentSize / 15,
							buttonSize / 2
						)
					);
				}

				//Carrot
				this.carrot = new Carrot(
					x + currentSize / 3,
					currentCenter,
					size * 0.15
				);
			}
			currentCenter -= currentSize * 0.35;
			currentSize /= reduction;
		}

		this.scarf = new Scarf(x, currentCenter + currentSize * 1.2, size * 0.25);
		this.hat = new Hat(x, currentCenter - size * 0.1, size * 0.36);
	}

	update(wind) {
		this.scarf.update(wind);
	}

	draw(ctx) {
		for (let snowBall of this.snowBalls) {
			snowBall.draw(ctx);
		}

		for (let stick of this.sticks) {
			stick.draw(ctx);
		}

		for (let button of this.buttons) {
			button.draw(ctx);
		}

		this.carrot.draw(ctx);
		this.scarf.draw(ctx);
		this.hat.draw(ctx);
	}
}
