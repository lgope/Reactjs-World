// js
let timerId;

const hideAlert = () => {
  const el = document.querySelector('.connection-alert');
  if (el) {
    el.parentElement.removeChild(el);
    clearTimeout(timerId);
  }
};

// type is 'success' or 'error'
const showConnectionStatus = (type, msg, time = 7) => {
  hideAlert();
  const markup = `<div class="connection-alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  timerId = window.setTimeout(hideAlert, time * 1000);
};

window.addEventListener('online', () =>
  showConnectionStatus(
    'connected',
    'Your device is connected to the internet!',
    10
  )
);
window.addEventListener('offline', () =>
  showConnectionStatus(
    'disconnected',
    'You are offline some functionality may be unavailable! Trying to connect...',
    60
  )
);

// css
.connection-alert {
  position: fixed;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 9999;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 200;
  padding: 1.6rem 2rem;
  -webkit-box-shadow: 0 4rem 4rem rgba(0, 0, 0, 0.25);
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.25);
}
.alert--connected {
  background-color: #20bf6b;
}
.alert--disconnected {
  background-color: #eb4d4b;
}


// user: just add script file to index.html like this
<script src="offline.js"></script>

