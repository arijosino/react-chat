import React from "react";
import { connect } from "react-redux";
import Modal from "./modal";

import ChatInput from "./chatinput";
import Message from "./message";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    this.messagesEnd.scrollIntoView();
  }
  render() {
    const messages = this.props.messages;
    return (
      <div className="chat">
        <Modal show={this.props.username.length == 0} submit={this.props.setName}>
        </Modal>
        <h2>Chat</h2>
        <ul className="messages">
          {
            messages.map((message, index) =>
              <Message key={index} message={message} />
            )
          }
          <div style={{ display: "collapsed" }}
            ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </ul>
        <ChatInput />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.user.name,
    messages: state.messages
  };
};

const mapDispatch = (dispatch) => {
  return {
    setName: (username) => {
      dispatch({
        type: "SET_NAME",
        payload: username
      });
    }
  };
};

export default connect(mapState, mapDispatch)(Chat);