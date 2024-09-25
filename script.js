var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
  d = new Date();
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minute / 12);
  document.getElementById("second-hand").style.transform =
    "rotate(" + second + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}, 1000);

// Get the minute markers container
window.onload = function() {
  const minuteMarkersContainer = document.querySelector('.minute-markers');

  for (let i = 0; i < 60; i++) {
    const marker = document.createElement('div');
    marker.classList.add('minute-marker');
    
    if (i % 5 === 0) {
      marker.classList.add('marker-long');
    }
    
    marker.style.transform = `rotate(${i * 6}deg) translateY(-240px)`;
    minuteMarkersContainer.appendChild(marker);
  }
};

function updateTime() {
  const d = new Date();
  
  // Update clock hands
  const second = d.getSeconds() * 6;
  const minute = d.getMinutes() * 6;
  const hour = d.getHours() * 30 + Math.round(minute / 12);

  document.getElementById("second-hand").style.transform = `rotate(${second}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minute}deg)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hour}deg)`;

  // Update date and day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[d.getDay()];
  const date = d.toLocaleDateString(); // Format based on user's locale

  document.getElementById("day").textContent = day;
  document.getElementById("date").textContent = date;
}

// Call the function every second to keep the clock updated
setInterval(updateTime, 1000);
updateTime(); // Initial call to display the time immediately
