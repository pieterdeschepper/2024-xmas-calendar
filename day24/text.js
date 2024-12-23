class Text {
	constructor(x, y, size, text = "T") {
		this.x = x;
		this.y = y;
		this.size = size;
		this.text = text;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = Color.snow;
		ctx.strokeStyle = Color.hatShadow;
		ctx.lineWidth = this.size / 30;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.letterSpacing = this.size / 10 + "px";
		ctx.font = this.size + "px Consolas";
		ctx.strokeText(this.text, this.x, this.y);
		ctx.fillText(this.text, this.x, this.y);
	}
}
