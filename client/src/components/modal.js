import React from "react";

export default class Modal extends React.Component {
  updateInput(e) {
    this.setState({ username: e.target.value });
  }
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.updateInput = this.updateInput.bind(this);
  }
  render() {
    return (
      <div className={"modal" + (this.props.show ? "" : " fade")} style={this.props.show ? { display: "block" } : { display: "none" }} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="username" aria-hidden="false">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">User Name</h5>
            </div>
            <form>
              <div className="modal-body">
                Please insert your name here
                <input type="text" className="form-control" value={this.state.username} onChange={(e) => this.updateInput(e)} required />
              </div>
              <div className="modal-footer">
                <input type="submit" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  this.props.submit(this.state.username);
                }} value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}