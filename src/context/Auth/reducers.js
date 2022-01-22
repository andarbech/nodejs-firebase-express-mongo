import React, { createContext, useReducer, useContext, Children } from "react";


export const actionType = {
    REQ_LOGIN_WITH_GOOGLE: "REQ_LOGIN_WITH_GOOGLE",
    REQ_LOGIN_WITH_EMAIL: "REQ_LOGIN_WITH_EMAIL",
    ERR_LOGIN: "ERR_LOGIN",
    SUCC_LOGIN: "SUCC_LOGIN",
};
  
const AuthContext = createContext();

const initState = {
  currentUser: null,
  isSigningIn: false,
  signInError: null
};

function reducer( state,action) {
    switch (action.type) {
        case actionType.REQ_LOGIN_WITH_GOOGLE:{
            return {
                ...state,
                isSigningIn: true,
                signInError:false,
            }
        }
        case actionType.ERR_LOGIN:{
            return {
                ...state,
                isSigningIn: false,
                //Why need here action.payload
                signInError:action.payload,
            }
        }
        case actionType.SUCC_LOGIN:{
            return {
                ...state,
                currentUser:action.payload,
                isSigningIn: false,
            }
        }
        default: {
            return state;
            }
    }
}

function AuthProvider({Children}) {
    const [state, dispatch] = useReducer(reducer, initState);

    const {
        currentUser,
isSigningIn,
signInError
    } = state
    const value = {
        state,
        loginWithGoogle: () => { },
        loginWithEmail:(email,password)=>{},
    }

    return (
        <AuthContext.Provider value={value}>
            {Children}
        </AuthContext.Provider>
    )
}