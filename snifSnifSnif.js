hasNewScript = true;

document.body.className = 'boehoehoe';
inputs.forEach(function (input) {
	input.disabled = true;
	input.readonly = true;
});

var img = document.createElement('img');
img.src = 'images/met-zijn-ex-collegas-die-hem-zullen-missen.jpg';
document.body.appendChild(img);
img.focus();

document.querySelector('h1').textContent = 'Veel succes bij Engagor! We gaan u missen…';
