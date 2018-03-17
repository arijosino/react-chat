import React from "react";

export default class ChatInput extends React.Component {
  submitMessage(e) {
    e.preventDefault();
    console.log(e,this.state.message);
    this.setState({message : ""});
  }
  updateInput(e){
    this.setState({message : e.target.value});
  }
  constructor(props) {
    super(props);
    this.state = {message:""};
    this.submitMessage = this.submitMessage.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  render() {
    return (
      <form className="input" onSubmit={(e) => this.submitMessage(e)}>
        <input type="text" value={this.state.message} onChange={(e)=>this.updateInput(e)}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}