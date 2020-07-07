function showInOut(domElement, str) {
    document.querySelector(domElement).innerHTML = str;
}
function takeElement(domElement) {
    return document.querySelector(domElement);
}

function activeKey(event) {
    let divKeyCode = takeElement(`.key[data-key-code="${event.keyCode}"]`);
    divKeyCode.classList.add("active-key");
}
function removeActiveKey(event) {
    takeElement(".active-key").classList.remove("active-key");
}
takeElement('.input-txt').onkeydown = activeKey;
takeElement('.input-txt').onkeyup = removeActiveKey;