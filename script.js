// Your code here

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = 'AM';

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  var time = h + ':' + m + ':' + s + ' ' + session;
  document.getElementById('MyClockDisplay').innerText = time;
  document.getElementById('MyClockDisplay').textContent = time;

  setTimeout(showTime, 1000);
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    showTime();
    navigator.serviceWorker
      .register('./sw.js')
      .then((reg) => console.log('Service Worker: Registered'))
      .catch((err) => console.log(`Service Worker: Error ${err}`));
  }
}

window.addEventListener('load', () => {
  registerSW();
});
