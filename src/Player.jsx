import fluidPlayer from 'fluid-player';

import { useEffect, useRef } from 'react';
function Player() {
  let self = useRef(null);
  let player = null;

  useEffect(() => {
    if (!player) {
      player = fluidPlayer(self.current, {});
    }
  });

  return (
    <>
      <video ref={self}>
        <source
          src="https://cdn.fluidplayer.com/videos/valerian-1080p.mkv"
          data-fluid-hd
          title="1080p"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default Player;
