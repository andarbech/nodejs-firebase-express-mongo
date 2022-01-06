
import { actionType } from "./reducers";

export async function loginWithGoogle(dispatch) {
    dispatch({ type: actionType.REQ_LOGIN_WITH_GOOGLE });
    try {
        await signInWithGoogle();
        await syncUserData();
    } catch (err) {
        dispatch({ type: actionType.ERR_LOGIN, payload: err },)
    }
}