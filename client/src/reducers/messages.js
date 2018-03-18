export default (state=[],action) => {
  if(action.type === "SEND_MESSAGE"){//TODO: make this actually work
    let newstate = Object.assign({}, state);
    return newstate;
  }
  return state;
};