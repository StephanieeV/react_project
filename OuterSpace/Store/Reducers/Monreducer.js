// Store/Reducers/Monreducer.js
const initialState = { init: [] };

function reduce(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE":
      nextState = {
        ...state //traitement
      };
      return nextState || state;
    case "UPDATE":
      nextState = {
        ...state
      };
      return nextState || state;

    default:
      return state;
  }
}
export default reduce;
