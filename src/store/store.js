import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {housingStockReducer} from "./reducers/housingStockReducer";
import {errorReducer} from "./reducers/errorReduser";

const rootReducer = combineReducers({
    housingStock: housingStockReducer,
    error: errorReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));