import changeTheNumber from "./upDown";
import changeTheNumber2 from "./mulDiv";

import {combineReducers} from "redux";

const rootReducer   = combineReducers({
    changeTheNumber,
    changeTheNumber2
});

export default rootReducer;