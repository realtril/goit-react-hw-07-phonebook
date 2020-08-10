import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";

const itemsReducer = combineReducers({
  items: reducers.items,
  filter: reducers.filter,
});

const store = configureStore({
  reducer: { contacts: itemsReducer },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;

// import { combineReducers, createStore } from "redux";
// import reducers from "./reducers/reducers";

// const itemsReducer = combineReducers({
//   items: reducers.items,
//   filter: reducers.filter,
// });

// const rootReducer = combineReducers({
//   contacts: itemsReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;
