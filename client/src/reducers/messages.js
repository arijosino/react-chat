import { sendMessage } from "../socket";
export default (state=[],action) => {
  if(action.type === "SEND_MESSAGE"){//TODO: make this actually work
    let newstate = JSON.parse(JSON.stringify(state));
    // newstate.push(action.payload);
    sendMessage(action.payload);
    return newstate;
  }
  else if(action.type === "GET_MESSAGE"){//TODO: make this actually work
    let newstate = JSON.parse(JSON.stringify(state));
    newstate.push(action.payload);
    return newstate;
  }
  return state;
};