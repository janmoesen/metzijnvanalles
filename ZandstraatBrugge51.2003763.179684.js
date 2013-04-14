function removeElement(element) {
    element.parentNode.removeChild(element);
}
removeElement(document.querySelector('kbd'));

document.documentElement.style.textAlign = 'center';

var h1 = document.querySelector('h1');
h1.textContent = 'Moge uw verdere leven op rollen lopen!';

var img = document.createElement('img');
img.src = 'images/met-zijn-rollen.jpg';
img.title = '<@notdeccenthomas> Nu zijn de rollen omgekeerd, HAHAHAHAHAHA!!1';
document.body.appendChild(img);

var footnote = document.createElement('p');
footnote.textContent = 'En bedank uw rollen maar voor de extra bijdrages!';
footnote.className = 'small';
document.body.appendChild(footnote);
