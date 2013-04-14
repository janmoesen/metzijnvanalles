alert('yes!');
document.body.className = 'boehoehoe';
inputs.forEach(function (input) {
	input.disabled = true;
	input.readonly = true;
});

document.links[0].focus();
