export type Signuptype = {
    name : string;
    email : string;
    password : string;
}

export type SignupReducer = {
    type : string;
    payload : string;
}

export type SignupInit = {
    isLoading : boolean;
    isError : boolean;
    isAuth : boolean;
    uid : string;
    errorMsg : string;
}

export type LoginType = {
    email : string;
    password : string;
}

export type Payment={
    children:string;
    val:boolean;
}