import React from "react";

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: { content: "", username: "" } };
  }
  render() {
    return (
      <li>{this.props.message.username}:<br />{this.props.message.content}</li>
    );
  }
}