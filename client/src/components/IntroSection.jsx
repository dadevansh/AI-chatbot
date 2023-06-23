import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Introducing Chatbot
        <BotResponse response=" - The Ultimate AI Assistant" />
      </h1>
      <h2>
        Ask me a question
      </h2>
    </div>
  );
};

export default IntroSection;
