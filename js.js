function showInOut(domElement, str) {
    document.querySelector(domElement).innerHTML = str;
}
function takeElement(domElement) {
    return document.querySelector(domElement);
}

function t11(event) {
    let divKeyCode = takeElement(`.key[data-key-code="${event.keyCode}"]`);
    divKeyCode.classList.add("active-key");
}
function removeActiveKey(event) {
    takeElement(".active-key").classList.remove("active-key");
}
takeElement('.i-11').onkeydown = t11;
takeElement('.i-11').onkeyup = removeActiveKey;