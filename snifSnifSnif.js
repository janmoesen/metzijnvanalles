hasNewScript = true;

document.body.className = 'boehoehoe';
inputs.forEach(function (input) {
	input.disabled = true;
	input.readonly = true;
});

var img = document.createElement('img');
img.src = 'images/met-zijn-ex-collegas-die-hem-zullen-missen.jpg';
img.title = '// announce that this is the end of the farce\n// EOF';
document.body.appendChild(img);

document.querySelector('h1').textContent = 'Veel succes bij Engagor! We gaan u missen…';
