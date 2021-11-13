
var hourHand = document.querySelector('[data-hour-hand]');;  //querySelector('#hourhand'); // "[data-hour-hand]"
var minuteHand = document.querySelector('[data-minute-hand]');
var secondHand = document.querySelector("[data-second-hand]");
console.log(`hourHand: ${hourHand}
minuteHand: ${minuteHand}
secondHand: ${secondHand}`);
setClock();
setInterval(setClock,1000);

function setClock()
{
    const currentDate= new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio+currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio+currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360);
}