// import { configureStore } from "redux";

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from "./reducers/index";

const store=configureStore({
    reducer:rootReducer
});

export default store;






// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

