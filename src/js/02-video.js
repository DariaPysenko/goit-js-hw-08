import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoPlayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

function playerSetTimeUpdate(data) {
  localStorage.setItem('videoPlayer-current-time', JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(playerSetTimeUpdate, 1000));
