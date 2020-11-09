const intialState = {};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { ...action.payload };
    }
    case "CHANGE_PASSWORD": {
      return  { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
export default userReducer;
