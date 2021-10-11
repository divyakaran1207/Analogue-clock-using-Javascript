const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelector('.hand')
function setSecond(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secondDegree = ((seconds/60)*360)+90;
    secondHand.style.transform = 'rotate'+ '(' +secondDegree+'deg' +')';
    console.log(seconds)
    const minutes = now.getMinutes()
    const minuteDegree = ((minutes/60)*360)+90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    console.log(minutes)
    const hours = now.getHours()
    const hourDegree = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(hours)
    
}
/* if(seconds==60){
    hands.style.transition= '0s'
    
} */
/* else{
 hands.style.transition='0.05s'
}   
 */
setInterval(setSecond,1000)