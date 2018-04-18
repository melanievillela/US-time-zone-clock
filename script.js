// Set Time
function setTime() {
  const now = new Date();
  const timezone = now.getTimezoneOffset();
  const secHand = document.querySelectorAll(".sec");
  const minHand = document.querySelectorAll(".min");
  const hourHand = document.querySelectorAll(".hour");
// Set Timezone to Central
  if (timezone != 300) {
    timezone = 300;
  }
//Set Seconds
  for (let i = 0; i < secHand.length; i++) {
    const second = now.getSeconds();
    const secDegrees = (second * 6);
    secHand[i].style.transform = `rotate(${secDegrees}deg)`;
    if (second === 0) {
      secHand[i].style.transition = "0s";
    } else {secHand[i].style.transition = "0.05s";}
  }
//Set Minutes
  for (let i = 0; i < minHand.length; i++) {
    const minute = now.getMinutes();
    const minDegrees = (minute * 6);
    minHand[i].style.transform = `rotate(${minDegrees}deg)`;
    if (minute === 0) {
      minHand[i].style.transition = "0s";
    } else {minHand[i].style.transition = "0.05s";}
  }
//Set Hours
  for (let i = 0; i < hourHand.length; i++) {
    const hour = now.getHours();
    if (hourHand[i].parentNode.classList.contains("zone-Central")) {
      const hourDegrees = (hour * 30);
      hourHand[i].style.transform = `rotate(${hourDegrees}deg)`;
    } else if (hourHand[i].parentNode.classList.contains("zone-Atlantic")) {
      const hourDegrees = ((hour + 1) * 30);
      hourHand[i].style.transform = `rotate(${hourDegrees}deg)`;
    } else if (hourHand[i].parentNode.classList.contains("zone-Mountain")) {
      const hourDegrees = ((hour - 1) * 30);
      hourHand[i].style.transform = `rotate(${hourDegrees}deg)`;
    } else {
      const hourDegrees = ((hour - 2) * 30);
      hourHand[i].style.transform = `rotate(${hourDegrees}deg)`;
    }
  }
}

setInterval(setTime, 1000);
setTime()
