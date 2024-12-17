class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	subtract(v) {
		return new Vector(this.x - v.x, this.y - v.y);
	}

	multiply(factor) {
		return new Vector(this.x * factor, this.y * factor);
	}

	getMagnitude() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	setMagnitude(magnitude) {
		const angle = this.getAngle();
		this.x = Math.cos(angle) * magnitude;
		this.y = Math.sin(angle) * magnitude;
	}

	getAngle() {
		return Math.atan2(this.y, this.x);
	}

	static fromAngle(angle) {
		return new Vector(Math.cos(angle), Math.sin(angle));
	}
}
