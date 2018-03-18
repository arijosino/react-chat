import React from "react";
import { connect } from "react-redux";

class ChatInput extends React.Component {
  updateInput(e){
    this.setState({message : e.target.value});
  }
  constructor(props) {
    super(props);
    this.state = {message:""};
    this.updateInput = this.updateInput.bind(this);
  }
  render() {
    return (
      <form className="input" onSubmit={(e) => {e.preventDefault(); this.props.sendMessage(this.state.message)}}>
        <input type="text" value={this.state.message} onChange={(e)=>this.updateInput(e)}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapState = (state)=>{//this is just a stub for now
  return {
    messages: state.messages
  };
};

const mapDispatch = (dispatch)=>{
  return {
    sendMessage: (message)=>{
      dispatch({
        type:"SEND_MESSAGE",
        payload:message
      });
    }
  };
};
export default connect(mapState,mapDispatch)(ChatInput);