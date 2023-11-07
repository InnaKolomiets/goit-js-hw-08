import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const setTime = data => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('timeupdate', _throttle(setTime, 1000));

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}