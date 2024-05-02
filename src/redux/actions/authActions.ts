import axios from "axios";
import { Dispatch } from "redux";

interface User {
    email: string;
    password: string;
}

const authActions = {
    logout: () => {
        return {
            type: "LOGOUT",
        };
    },
    authenticate: (user: User) => {
        return async (dispatch: Dispatch): Promise<void> => {
            dispatch({ type: "AUTHENTICATE_REQUEST" });

            try {
                await axios.post("http://localhost:4001/users", user);
                dispatch({ type: "AUTHENTICATE_SUCCESS", payload: user.email });
            } catch (error) {
                dispatch({ type: "AUTHENTICATE_FAILURE", payload: error });
            }
        };
    },
};

export { authActions };