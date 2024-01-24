import { useState } from "react";
import IframePlayer from "./IframePlayer";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <button onClick={() => setPlay((val) => !val)}>
        {play ? "Pause" : "Play"}
      </button>

      {play ? (
        <div className="h-[800px] w-[1000px]">
          <IframePlayer />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
