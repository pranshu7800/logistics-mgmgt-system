const initialState = {
    email: "",
    loading: false,
    error: null,
};

interface ActionObject {
    type: string;
    payload: any;
}

const authReducer = (state = initialState, action: ActionObject) => {    
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                email: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                email: "",
            };
        case "AUTHENTICATE_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "AUTHENTICATE_SUCCESS":
            return {
                ...state,
                email: action.payload,
                loading: false,
            };
        case "AUTHENTICATE_FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export { authReducer };