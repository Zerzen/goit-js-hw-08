//
//

//

//

import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);
let time;
const timeToStart = localStorage.getItem('videoplayer-current-time');

function remeberTimePause(timeupdate) {
  time = timeupdate.seconds;

  localStorage.setItem('videoplayer-current-time', time);
}

player.on('play', throttle(remeberTimePause, 2000));
player.on('pause', throttle(remeberTimePause, 2000));

// player.pause('play', function (timeupdate) {
//   time = timeupdate.seconds;

//   localStorage.setItem('videoplayer-current-time', time);
// });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(timeToStart)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
