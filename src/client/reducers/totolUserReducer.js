const intialState = [];

const totolUserReducer = (state = intialState, action) => {
  switch (action.type) {
    
    case "SET_TOTOL_USER": {
      return state.concat(action.payload);
    }
    case "CHANGE_PASSWORD": {
      return state.map((ele) => {
        console.log(action.payload._id);
        if (ele._id == action.payload._id) {
          console.log(ele._id == action.payload._id);
          return Object.assign({}, ele, action.payload.data);
        } else {
          return Object.assign({}, ele);
        }
      });
    }

    default: {
      return [].concat(state);
    }
  }

};
export default totolUserReducer;