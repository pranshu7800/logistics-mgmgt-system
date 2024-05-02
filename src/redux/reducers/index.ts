import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { shipmentReducer } from "./shipmentReducer";

const reducer = combineReducers({
    auth: authReducer,
    shipment: shipmentReducer,
});

export default reducer;
