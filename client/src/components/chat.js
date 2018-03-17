import React from "react";
import ChatInput from "./chatinput";
import Message from "./message";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [{username:"someone",content:"something"}]
    };
  }
  render() {
    const messages = this.state.messages;
    return (
      <div className="chat">
        <h2>Chat</h2>
        <ul className="messages">
          {
            messages.map((message,index) =>
              <Message key={index} message={message} />
            )
          }
        </ul>
        <ChatInput/>
      </div>
    );
  }
}