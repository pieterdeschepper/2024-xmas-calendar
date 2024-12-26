class Scene23 extends Scene22 {
	constructor(canvas) {
		super(canvas);
		this.smoke = [];
	}

	update() {
		super.update();
		if (this.frameCount % 200 === 0) {
			this.smoke.push(
				new Smoke(
					this.cabin?.chimney?.x,
					this.cabin?.chimney?.y - this.cabin?.chimney?.size / 2,
					50
				)
			);
		}
		for (let i = this.smoke.length - 1; i >= 0; i--) {
			this.smoke[i].update(this.wind);
			if (this.smoke[i].opacity <= 0) {
				this.smoke.splice(i, 1);
			}
		}
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (const s of this.stars) {
			s.draw(this.ctx);
		}

		this.moon.draw(this.ctx);

		for (const s of this.snowflakes) {
			s.draw(this.ctx);
		}

		for (const c of this.clouds) {
			c.draw(this.ctx);
		}

		for (const s of this.smoke) {
			s.draw(this.ctx);
		}

		this.cabin.draw(this.ctx);

		for (const h of this.hills) {
			h.draw(this.ctx);
		}

		this.tree.draw(this.ctx);
		this.snowman.draw(this.ctx);

		for (const h of this.hillsForeground) {
			h.draw(this.ctx);
		}

		for (const c of this.cords) {
			c.draw(this.ctx);
		}

		for (const b of this.bells) {
			b.draw(this.ctx);
		}
	}
}
