const hourSpan = document.getElementById('hour');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const ampmSpan = document.getElementById('ampm');

function changeTime(){
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour %= 12;
    hour = hour || 12;

    hourSpan.textContent = hour;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    ampmSpan.textContent = ampm;

}
setInterval(changeTime, 1000);
