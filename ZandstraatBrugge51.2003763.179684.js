function removeElement(element) {
    element.parentNode.removeChild(element);
}
removeElement(document.querySelector('kbd'));

var img = document.createElement('img');
img.src = 'images/met-zijn-rollen.jpg';
document.body.appendChild(img);

document.querySelector('h1').textContent = 'Veel plezier bij Engagor! En met uw rollen.';
var footnote = document.createElement('p');
footnote.textContent = 'En bedank uw rollen maar voor de extra bijdrages!';
footnote.className = 'small';
document.body.appendChild(footnote);
