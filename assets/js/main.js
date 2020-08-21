const inputEl = document.getElementById('colorInputText');

inputEl.addEventListener('keyup', changeColor);

function changeColor() {
    let color = document.getElementById('colorInputText').value;
    document.body.style.backgroundColor = color;
}