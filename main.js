const cellSize = 200;

const classes = [];
classes[1] = Snowflake;
classes[2] = Hill;
classes[3] = Snowball;
classes[4] = Stick;
classes[5] = Hat;
classes[6] = Button;
classes[7] = Carrot;
classes[8] = Scarf;
classes[9] = Snowman;

const scenes = [];
scenes[1] = Scene1;
scenes[2] = Scene2;
scenes[3] = Scene3;
scenes[4] = Scene4;
scenes[5] = Scene5;
scenes[6] = Scene6;
scenes[7] = Scene7;
scenes[8] = Scene8;
scenes[9] = Scene9;

let currentScene = null;

for (let day = 1; day <= 24; day++) {
	const klass = classes[day];

	const container = document.createElement("div");
	container.className = "container";
	container.style.width = cellSize + "px";
	container.style.height = cellSize + "px";
	const canvas = document.createElement("canvas");
	canvas.width = cellSize;
	canvas.height = cellSize;

	container.appendChild(canvas);
	const info = document.createElement("div");
	info.className = "info";
	if (klass) {
		info.innerHTML = "Day " + day + "<br/>" + klass.name;
	} else {
		info.innerHTML = "Day " + day;
	}
	container.appendChild(info);

	info.onclick = (e) => {
		if (!scenes[day]) {
			return;
		}
		const sceneCanvas = document.getElementById("scene");
		if (!currentScene) {
			e.stopPropagation();
			sceneCanvas.style.display = "block";
			currentScene = new scenes[day](sceneCanvas);
			currentScene.start();

			const body = document.getElementsByTagName("body")[0];
			body.onclick = (e) => closeScene(e);
			body.onkeydown = (e) => {
				if (e.key === "Escape") {
					closeScene(e);
				}
			};

			const closeScene = (e) => {
				if (e.target === sceneCanvas) {
					return;
				}
				sceneCanvas.style.display = "none";
				currentScene.stop();
				currentScene = null;
			};
		}
	};

	document.body.appendChild(container);

	fillCell(day, canvas);
}

function fillCell(index, canvas) {
	const ctx = canvas.getContext("2d");
	const x = canvas.width / 2;
	const y = canvas.height / 2;
	const size = canvas.width * 0.6;

	const klass = classes[index];
	if (klass) {
		canvas.title = klass.name;
		const item = new klass(x, y, size);
		item.draw(ctx);
	} else {
		drawNumber(ctx, index, x, y, size);
	}
}

function drawNumber(ctx, value, x, y, size) {
	ctx.font = size + "px Consolas";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(value, x, y);
}
