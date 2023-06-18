import { SignupReducer } from "../types"
import { AUTH_REQ, AUTH_REQ_FAILURE, AUTH_REQ_SUCCESS, LOGIN_SUCCESS, SIGNOUT } from "../actionTypes";

const initialState = {
    displayName :"",
    isLoading : false,
    isError : false,
    isAuth : false,
    tokenId : '',
    loginToken : '',
    errorMsg: '',
    signUpAuth :false
}



export const reducer = (state = initialState, { type, payload }: SignupReducer) => {
    console.log(payload , "checking payload ")
   switch(type){

    case AUTH_REQ : {
        return {
            ...state,
            displayName : "",
            isLoading : true,
            isError : false,
            tokenId : '',
            loginToken : '',
            isAuth : false,
            errorMsg: '',
            signUpAuth :false
        }
    }

    case AUTH_REQ_SUCCESS : {
        return {
            ...state,
            displayName: "",
            isLoading : false,
            tokenId : payload, 
            isError : false,
            loginToken : '',
            isAuth : false,
            errorMsg: '',
            signUpAuth :true
        }
    }
 case SIGNOUT : {
        return initialState
    }
    case AUTH_REQ_FAILURE : {
        return {
            ...state,
            displayName: "",
            isLoading : false,
            isError : true,
            errorMsg : payload,
            tokenId : '',
            loginToken : '',
            isAuth: false,
            signUpAuth :false
        }
    }

    case LOGIN_SUCCESS : {
        return {
            ...state,
            displayName: "",
            isLoading : false,
            isError : false,
            errorMsg : '',
            tokenId : '',
            loginToken : payload,
            isAuth: true,
            signUpAuth :false
        }
    }

     default : {
        return state;
     }
   }

}