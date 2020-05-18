import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
// import mapsReducer from "./mapsReducer";
// import cartReducer from "./cartReducer";

const reducer = combineReducers({
  users: usersReducer,
  // maps: mapsReducer,
  // cart: cartReducer
});

export default reducer;
