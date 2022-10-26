import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Valentina"
        message="Yo What's up!"
        timestamp="30 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AddZYK_udZwf8VL1NXiCJDc83XyA6OiVRw&usqp=CAU"
      />
      <Chat
        name="Agatha"
        message="Hi there! 🌟"
        timestamp="55 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT534peCaQUl3Xqb9ESeoN8n_Ro4zwoIyEQdg&usqp=CAU"
      />
      <Chat
        name="Ananya"
        message="Hiii 💖"
        timestamp="2 minutes ago"
        profilePic="https://assets.vogue.in/photos/6271fc8ae67a3f9794753027/4:3/w_1080,h_810,c_limit/276954099_696267184734608_9124472900322905945_n.jpg"
      />
      <Chat
        name="Emilia"
        message="Hey 👀"
        timestamp="4 minutes ago"
        profilePic="https://c.files.bbci.co.uk/61FF/production/_125578052_emiliaclarke2.jpg"
      />
    </div>
  );
}

export default Chats;
