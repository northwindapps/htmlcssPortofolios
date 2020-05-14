console.log('header.js')
const yearLabel = document.getElementsByClassName('year')[0];//this cleary makes sense. class has many objects.
const monthDateLabel = document.getElementsByClassName('monthdate')[0];
const dayLabel = document.getElementsByClassName('day')[0];
const hoursLabel = document.getElementsByClassName('hours')[0];  
const minutesLabel = document.getElementsByClassName('minutes')[0];
const secLabel = document.getElementsByClassName('seconds')[0];
let colonLabel = document.getElementsByClassName('colon')[0];
let mincolonLabel = document.getElementsByClassName('mincolon')[0];
let currentTimeLabel = document.getElementsByTagName('li')[0];


function updateTime(){
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const sec = today.getSeconds();


    yearLabel.innerHTML = year;
    monthDateLabel.innerHTML = month+1 + '/' + date;

    dayLabel.innerHTML = day;
    hoursLabel.innerHTML = hour < 10 ? '0' + hour : hour;
    minutesLabel.innerHTML = minute < 10 ? '0' + minute :hour;
    secLabel.innerHTML = sec < 10 ? '0' + sec :sec;


    colonLabel.style.animation="blinking 1s infinite";
    colonLabel.style.animationTimingFunction="linear";

    if (sec === 0){
        mincolonLabel.style.animation="blinking 1s 1";
        mincolonLabel.style.animationTimingFunction="linear";

        sleep(5000).then(
            () => {
                mincolonLabel.removeAttribute('style');
            }
        );
    }

    currentTimeLabel.style.display = 'flex';
}; 

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve,time));
}

setInterval(updateTime,1000);
