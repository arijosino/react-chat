export default (state={name:""},action) => {
  if(action.type === "SET_NAME"){
    let newstate = JSON.parse(JSON.stringify(state));
    newstate.name = action.payload;
    return newstate;
  }
  return state;
};