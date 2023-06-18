import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AUTH_REQ, AUTH_REQ_FAILURE, AUTH_REQ_SUCCESS, LOGIN_SUCCESS, SIGNOUT } from "../actionTypes";
import { LoginType, Signuptype } from "../types";
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';


export const signup = (formData: Signuptype) => (dispatch: any) => {
    dispatch({ type: AUTH_REQ });
    createUserWithEmailAndPassword(auth, formData.email, formData.password).then(async res => {
        const user = res.user;
        // let value = res.user.getIdToken().then(res => res.json()).then(res => res);
        // console.log(value);
        await updateProfile(user, {
            displayName: formData.name
        })
        const tokenId = await user.getIdToken();
       
        dispatch({ type: AUTH_REQ_SUCCESS, payload: tokenId});
    }).catch(err => {
         console.log(err.message)
        const errMsg = err.message;
        if (errMsg === 'Firebase: Error (auth/email-already-in-use).') {
            dispatch({ type: AUTH_REQ_FAILURE, payload: errMsg });
        }
    })
}

export const login = (logindata: LoginType) => (dispatch: any) => {
    dispatch({ type: AUTH_REQ })
    signInWithEmailAndPassword(auth, logindata.email, logindata.password).then(async (res) => {
        //  console.log(res)
        const token = (await res.user.getIdTokenResult()).token;
        // console.log((await res.user.getIdTokenResult()).token)
        dispatch({ type: LOGIN_SUCCESS, payload: token })

    }).catch((err) => {
        //  console.log(err)
        dispatch({ type: AUTH_REQ_FAILURE, payload: err.message })
    })
}

export const signout = (dispatch:any) => {
    dispatch({ type: SIGNOUT })
}