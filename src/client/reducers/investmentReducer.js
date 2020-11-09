const intialState = [];

const investmentReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_INVESTMENT": {
      return state.concat(action.payload);
    }
    case "REMOVE_INVESTMENT": {
      return state.filter((ele) => ele._id !== action.payload);
    }

    default: {
      return [].concat(state);
    }
  }
};
export default investmentReducer;
