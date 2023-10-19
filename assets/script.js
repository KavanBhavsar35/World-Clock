// This function is called when the document is ready
const ready = () => {
  // Set up an interval to update the clock display every second
  setInterval(() => {
    // Get the current time as a string
    const time = new Date().toLocaleTimeString();
    // Split the time string into hours, minutes, and AM/PM
    let tArr = time.split(':');
    let s = tArr[2].split(' ');
    let tm = [n(tArr[0]), n(tArr[1]), s[1]];
    // Call the filterTime function to update the display
    filterTime(tm);
  }, 1000);
}

// This function filters and updates the time display
const filterTime = (time) => {
  // Handle minutes display
  if (time[1] < 10) {
    minute(0, time[1]);
  } else if (time[1] < 20) {
    minute(time[1]);
  } else if (time[1] < 60) {
    let tens = Math.floor(time[1] / 10) * 10;
    let ones = time[1] % 10;
    minute(tens, ones >= 1 ? ones : null);
  }

  // Handle hours display
  hr(time[0]);

  // Handle AM/PM display
  amPm(time[2]);
}

// This function updates the hours display
const hr = (hr) => {
  const h = document.querySelectorAll('.hr');
  h.forEach(r => {
    if (n(r.classList[1]) == hr) {
      r.classList.add('now');
    }
    if (n(r.classList[1]) != hr) {
      r.classList.remove('now');
    }
  });
}

// This function updates the minutes display
const minute = (min1, min2) => {
  const minD = document.querySelectorAll('.min');
  minD.forEach(m => {
    if (n(m.classList[1]) == min1 || n(m.classList[1]) == min2) {
      m.classList.add('now');
    } else {
      m.classList.remove('now');
    }
  });
}

// This function updates the AM/PM display
const amPm = (a) => {
  const merD = document.querySelectorAll('.merD');
  merD.forEach(m => {
    if (m.classList[1].toUpperCase() == a) {
      m.classList.add('now');
    } else {
      m.classList.remove('now');
    }
  });
}

// Helper function to convert a string to a number
const n = (num) => {
  return Number(num);
}

// Call the ready function when the document is ready
ready();