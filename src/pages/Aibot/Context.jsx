import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(
    "Welcome! How can I assist you today?"
  );

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("Welcome! How can I assist you today?");
  };

  const onSent = async (prompt) => {
    setResultData(""); // Clear previous result data
    setLoading(true);
    setShowResult(true);
    let response;

    // Set recent or previous prompt
    if (prompt !== undefined) {
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
    }

    // Simulate response (You should replace this with actual API call)
    response =
      "Click here to download: http://example.com/file.zip **Bold Text** and some more text *line break*.";

    // Detect URLs and replace them with a Download link
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    response = response.replace(urlPattern, (url) => {
      return `<a href="${url}" download>Download File</a>`; // Replace the URL with "Download" link
    });

    // Process response to handle bold and line breaks
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
