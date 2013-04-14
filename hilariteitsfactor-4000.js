document.body.innerHTML = '<img src="images/met-zijn-grijns-1.jpg"><img src="images/met-zijn-grijns-2.jpg">';

var img = document.images[1];
var numCycles = 0;
var delay = 500;
var togglerTimeoutId, navigationTimeoutId;

function toggle() {
	console.debug(new Date(), ': ', numCycles, delay, togglerTimeoutId, navigationTimeoutId);
	img.style.display = img.style.display == 'none'
		? 'inline-block'
		: 'none';

	delay /= 1.1;
	togglerTimeoutId = setTimeout(toggle, delay);

	if (delay <= 15 && !navigationTimeoutId) {
		numCycles++;

		if (numCycles >= 10) {
			navigationTimeoutId = setTimeout(function () {
				clearTimeout(togglerTimeoutId);
				location = 'http://metzijnexcollegasdiehemzullenmissen.be/';
			}, 3000);
		}
	}
}

setTimeout(toggle, delay);
