import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {housingStockReducer} from "./reducers/housingStockReducer";

const rootReducer = combineReducers({
    housingStock: housingStockReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));