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
		super.draw();
		for (let s of this.smoke) {
			s.draw(this.ctx);
		}

		this.cabin.draw(this.ctx);
	}
}
