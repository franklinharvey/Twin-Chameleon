const _x = document;
const _y = "innerHTML";
const _z = "getElementById";
const _w = "createElement";
const releaseDate = new Date("2021-08-20T04:00:00Z");
const countDownDate = releaseDate.getTime();
render();

// Update the count down every 1 second
const interval = setInterval(function () {
  render();
}, 1000);

kill = () => {
  clearInterval(interval);
};

function render() {
  // Get today's date and time

  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const parent = _x[_z]("countdown");
  parent[_y] = "";

  const countDownElem = _x[_w]("h1");
  countDownElem[_y] =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  const spacer = _x[_w]("br");
  const releaseDateElem = _x[_w]("p");
  releaseDateElem[_y] = releaseDate.toDateString();

  const releaseTimeElem = _x[_w]("small");
  releaseTimeElem[_y] = releaseDate.toLocaleTimeString();
  parent.appendChild(countDownElem);
  parent.appendChild(spacer);
  parent.appendChild(releaseDateElem);
  parent.appendChild(releaseTimeElem);

  // If the count down is finished, write some text
  if (distance <= 0) {
    kill();
    parent.classList.add("hide");
    _x[_z]("video-embed").classList.remove("hide");
  } else {
    parent.classList.remove("hide");
    _x[_z]("video-embed").classList.add("hide");
  }
}
