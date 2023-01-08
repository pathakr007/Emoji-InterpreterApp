import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "❤️": "Love",
  "😊": "Smiling",
  "😂": "Laughing",
  "😔": "Sad",
  "💀": "Skull",
  "😭": "Crying",
  "😡": "Angry",
  "😳": "Disbelief",
  "😘": "Kiss",
  "😲": "Strange",
  "😴": "Snap",
  "😎": "looking smart",
  "😷": "Wear-mask"
};

var emojisInOurList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiMeaningHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in out DB";
    }
    setMeaning(meaning);
  }

  function emojiInputHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h2>Search your Emoji meaning here</h2>

      <input onChange={emojiMeaningHandler} />

      <h2> The meaning is : {meaning} </h2>

      <h3> Emoji's we have in our DB </h3>
      {emojisInOurList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiInputHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
