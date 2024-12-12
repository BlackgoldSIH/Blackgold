import "./AI.css";
import { assets } from "./assets/assets";
import { useContext, useState, useRef } from "react";
import {Context} from "./Context"

const AI = () => {
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleSend = () => {
    if (input || selectedImage || audioURL) {
      onSent();
      setSelectedImage(null); // Clear the image after sending
      setAudioURL(null); // Clear the audio after sending
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleCardClick = (text) => {
    setInput(text); // Set the question text in the input bar
  };

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>System AI</p>
          <img src={assets.user_icon} alt="UserIcon" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello , Investigator</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick("Can Admin modify Project details?")
                  }
                >
                  <p>Can Admin modify Project details?</p>
                  <img src={assets.compass_icon} alt="CompassIcon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "What is start and end date of project 1."
                    )
                  }
                >
                  <p>What is start and end date of Project 1.</p>
                  <img src={assets.bulb_icon} alt="CompassIcon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Provide me funding details of Project 1."
                    )
                  }
                >
                  <p>Provide me funding details of Project 1.</p>
                  <img src={assets.message_icon} alt="CompassIcon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "how to upload Report?"
                    )
                  }
                >
                  <p>how to upload Report?</p>
                  <img src={assets.code_icon} alt="CompassIcon" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              {/* User's Prompt */}
              <div className="result-title">
                <img src={assets.user_icon} alt="UserIcon" />
                <p>{recentPrompt}</p>
              </div>

              {/* Bot's Response */}
              <div className="result-data">
                <img src={assets.gemini_icon} alt="GeminiIcon" />
                {loading ? (
                  <div className="typing-animation">
                    <img src={assets.gemini_icon} alt="GeminiIcon" />
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                    <p>Typing...</p>
                  </div>
                ) : (
                  <div>
                    {selectedImage && (
                      <div className="response-image">
                        <img
                          src={selectedImage}
                          alt="Uploaded"
                          style={{
                            maxWidth: "100%",
                            borderRadius: "8px",
                            marginBottom: "10px",
                          }}
                        />
                      </div>
                    )}
                    {audioURL && (
                      <audio
                        controls
                        src={audioURL}
                        style={{ marginBottom: "10px" }}
                      />
                    )}
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Input Section */}
          <div className="main-bottom">
            <div className="search-box">
              <div className="input-container">
                {selectedImage && (
                  <div className="selected-image">
                    <img
                      src={selectedImage}
                      alt="Selected Preview"
                      style={{
                        maxWidth: "150px",
                        height: "55px",
                        width: "79px",
                        borderRadius: "5px",
                        marginRight: "8px",
                      }}
                    />
                  </div>
                )}
                <input
                  onChange={(event) => setInput(event.target.value)}
                  value={input}
                  type="text"
                  placeholder="Enter a prompt here"
                />
              </div>
              <div className="search-box-icon">
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <img src={assets.gallery_icon} alt="GalleryIcon" />
                </label>
                {isRecording ? (
                  <img
                    onClick={stopRecording}
                    src={assets.mic_icon}
                    alt="MicIcon"
                    style={{ filter: "grayscale(0)" }}
                  />
                ) : (
                  <img
                    onClick={startRecording}
                    src={assets.mic_icon}
                    alt="MicIcon"
                  />
                )}
                {(input || selectedImage || audioURL) && (
                  <img
                    onClick={handleSend}
                    src={assets.send_icon}
                    alt="SendIcon"
                  />
                )}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI;
