class XmasTree {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.tree = new Tree(x, y, size);
		this.cords = [
			new Cord(x, y - size * 0.3, size * 0.3, 3, size * 0.03, 0),
			new Cord(x, y - size * 0.1, size * 0.5, 5, size * 0.03, 0),
			new Cord(x, y + size * 0.1, size * 0.7, 5, size * 0.03, 0),
		];
		this.balls = [
			new Ball(x - size * 0.05, y - size * 0.35, size * 0.07),
			new Ball(x + size * 0.07, y - size * 0.3, size * 0.07),
			new Ball(x + size * 0.12, y - size * 0.17, size * 0.07),
			new Ball(x, y - size * 0.07, size * 0.07),
			new Ball(x - size * 0.12, y - size * 0.13, size * 0.07),
			new Ball(x - size * 0.2, y + size * 0.05, size * 0.07),
			new Ball(x - size * 0.07, y + size * 0.15, size * 0.07),
			new Ball(x + size * 0.03, y + size * 0.12, size * 0.07),
			new Ball(x + size * 0.17, y + size * 0.17, size * 0.07),
			new Ball(x + size * 0.2, y + size * 0.05, size * 0.07),
			new Ball(x + size * 0.22, y + size * 0.28, size * 0.07),
			new Ball(x - size * 0.22, y + size * 0.28, size * 0.07),
		];

		this.star = new Star(
			x,
			y - size * 0.5,
			size * 0.12,
			5,
			(3 * Math.PI) / 2,
			false
		);
	}

	draw(ctx) {
		this.tree.draw(ctx);
		for (const c of this.cords) {
			c.draw(ctx);
		}
		for (const b of this.balls) {
			b.draw(ctx);
		}
		this.star.draw(ctx);
	}
}
