function randomBetween(a, b) {
	return Math.random() * (b - a) + a;
}

function constrain(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

function map(value, start1, stop1, start2, stop2) {
	return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
