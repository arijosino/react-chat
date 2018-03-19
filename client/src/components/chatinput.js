import React from "react";
import { connect } from "react-redux";

class ChatInput extends React.Component {
  updateInput(e) {
    this.setState({ message: e.target.value });
  }
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.updateInput = this.updateInput.bind(this);
  }
  render() {
    return (
      <form className="input" onSubmit={(e) => {
        e.preventDefault();
        this.props.sendMessage({ username: this.props.username, content: this.state.message });
        this.setState({ message: "" });
      }}>
        <input type="text" value={this.state.message} onChange={(e) => this.updateInput(e)} required />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.user.name
  };
};

const mapDispatch = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch({
        type: "SEND_MESSAGE",
        payload: message
      });
    }
  };
};
export default connect(mapState, mapDispatch)(ChatInput);