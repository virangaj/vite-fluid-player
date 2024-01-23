import { useState } from 'react';
import IframePlayer from './IframePlayer';

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <button onClick={() => setPlay((val) => !val)}>
        {play ? 'Pause' : 'Play'}
      </button>

      {play ? <IframePlayer /> : <></>}
    </>
  );
}

export default App;
