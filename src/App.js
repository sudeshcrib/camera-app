import logo from "./logo.svg";
import "./App.css";
import Camera, { PropertyBag } from "@onecamera/core";
import "@onecamera/core/build/style.css";
import { useState } from "react";

function App() {
  const stagesConfig = {
    states: {
      playback: {
        on: {
          NEXT: 'processing',
        },
      },
    }
  }

  const [recording, setRecording] = useState(false);

  function startRecording() {
    setRecording(true);
  }

  function onComplete() {
    setRecording(false);
  }
  return (
    <>
      {recording ? (
        <div class="App-header">
          <div style={{height:'600px', width: '-webkit-fill-available'}}>
            <Camera
              enableBasicCamera={true}
              maxRecordDuration={600}
              allowDownloads
              effects={{
                text: true,
                ink: true,
                photo: true,
                teleprompter: true,
              }}
              thumbnailConfiguration={{
                isProcessingPreviewEnabled: false,
                aspectRatio: "16x9",
              }}
              preferredControlsConfiguration={{
                globalControls: [
                  "sticky_notes",
                  "mirror_video",
                  "mute",
                  "screen_share",
                ],
              }}
              cameraCallbacks={{
                onComplete: onComplete,
              }}
              stages={stagesConfig}
            />
          </div>
        </div>
      ) : (
        <div class="App-header">
          <button onClick={startRecording}>Start Recording</button>
        </div>
      )}
    </>
  );
}

export default App;
