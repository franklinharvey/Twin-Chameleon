const _y = "innerHTML";
const releaseDate = new Date("2021-08-20T04:00:00Z");
const countDownTime = releaseDate.getTime();
render();

// Update the count down every 1 second
var interval = setInterval(function () {
  render();
}, 1000);

function kill() {
  clearInterval(interval);
}

function render() {
  // Get today's date and time

  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownTime - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const parent = document.getElementById("countdown");
  const video = document.getElementById("video-embed");
  parent[_y] = "";

  const countDownElem = document.createElement("h1");
  countDownElem[_y] =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  const spacer = document.createElement("br");
  const releaseDateElem = document.createElement("p");
  releaseDateElem[_y] = releaseDate.toDateString();

  const releaseTimeElem = document.createElement("small");
  releaseTimeElem[_y] = releaseDate.toLocaleTimeString();
  parent.appendChild(countDownElem);
  parent.appendChild(spacer);
  parent.appendChild(releaseDateElem);
  parent.appendChild(releaseTimeElem);

  // If the count down is finished, write some text
  if (distance <= 0) {
    kill();
    parent.classList.add("hide");
    video.classList.remove("hide");
  } else {
    parent.classList.remove("hide");
    video.classList.add("hide");
  }
}
