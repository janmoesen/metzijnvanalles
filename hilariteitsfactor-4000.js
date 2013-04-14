document.body.innerHTML = '<img src="images/met-zijn-grijns-1.jpg">';

var img = document.images[0];
var numCycles = 0;
var delay = 500;
var timeoutId;

function toggle() {
	var newSrc = img.src.replace('-1', '-2');
	console.debug(img.src);
	console.debug(newSrc);
	if (newSrc == img.src) {
		newSrc = img.src.replace('-2', '-1')
	}
	img.src = newSrc;
	timeoutId = setTimeout(toggle, delay);
	delay /= 1.1;

	if (delay <= 15) {
		numCycles++;

		if (numCycles >= 10) {
			clearTimeout(timeoutId);
			location = 'http://metzijnexcollegasdiehemzullenmissen.be/';
		}
	}
}

setTimeout(toggle, delay);
