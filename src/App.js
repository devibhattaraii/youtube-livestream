import React from 'react';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import './styles.css';

const modalStyles = {
  content: {
    top: '0%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Render function for Prismic headless CMS pages
function Content() {
  const [videoUrl, setVideoUrl] = React.useState(
    'https://www.youtube.com/watch?v=dC39XHuxBXg'
  );
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split('v=')[1].split('&')[0];
  }

  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime >= duration) {
      //  Show or hide the Video to display Live stream map
    }
  };

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoCode}
      className="container"
      containerClassName="embed embed-youtube"
      onStateChange={(e) => checkElapsedTime(e)}
      opts={opts}
    />
  );
}

export default Content;
