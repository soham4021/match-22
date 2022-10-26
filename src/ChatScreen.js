import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Valentina",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AddZYK_udZwf8VL1NXiCJDc83XyA6OiVRw&usqp=CAU",
      message: "Yo what's up!",
    },
    {
      name: "Valentina",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AddZYK_udZwf8VL1NXiCJDc83XyA6OiVRw&usqp=CAU",
      message: "Where u from?👀",
    },
    {
      message: "Hello gorgeous 😍",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH VALENTINA ON 15/10/2022
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="chatScreen__inputField"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
