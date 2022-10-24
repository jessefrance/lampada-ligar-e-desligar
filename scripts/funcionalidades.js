const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
    lampada.src = "./images/ligada.jpg";
}

turnOn.addEventListener ( 'click', lampOn );
