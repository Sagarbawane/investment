const intialState = [];

const withdrawalReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_WITHDRAWAL": {
      return state.concat(action.payload);
    }
    case "REMOVE_WITHDRAWAL": {
      return state.filter((ele) => ele._id !== action.payload);
    }

    default: {
      return [].concat(state);
    }
  }
};
export default withdrawalReducer;
