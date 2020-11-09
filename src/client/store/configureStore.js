import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import totolUserReducer from "../reducers/totolUserReducer";
import userReducer from "../reducers/userReducer";
import  investmentReducer from "../reducers/investmentReducer";
import withdrawalReducer from "../reducers/withdrawalReducer";



const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      totolUser:totolUserReducer,
      investment:investmentReducer,
      withdrawal:withdrawalReducer
    
     
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
