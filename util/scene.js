class Scene {
	constructor(canvas) {
		this.canvas = canvas;
		this.#setCanvasDimensions();
		this.ctx = canvas.getContext("2d");
		this.isAnimating = false;
		this.frameCount = 0;
		this.snowflakes = [];
		this.ctx = canvas.getContext("2d");
		this.wind = randomBetween(-0.01, 0.01);
	}

	#setCanvasDimensions() {
		const sceneCanvasDimensions = this.canvas.getBoundingClientRect();
		this.canvas.width = sceneCanvasDimensions.width;
		this.canvas.height = sceneCanvasDimensions.height;
	}

	animate() {
		if (this.isAnimating) {
			this.frameCount++;
			this.update();
			this.draw();
			requestAnimationFrame(this.animate.bind(this));
		}
	}

	start() {
		this.isAnimating = true;
		this.animate();
	}

	stop() {
		this.isAnimating = false;
	}

	pause() {
		if (this.isAnimating) {
			this.stop();
		} else {
			this.start();
		}
	}

	update() {
		this.wind += randomBetween(-0.0015, 0.0015);
		this.wind = constrain(this.wind, -0.025, 0.025);
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
