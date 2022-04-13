export const AuthReducer = (authState, authAction) => {
    switch(authAction.type){
        case 'EMAIL':
            return{...authState, email:authAction.payload}
        case 'PASSWORD':
            return{...authState, password:authAction.payload}  
        case 'SUBMIT':
            return{...authState, isSubmit:true}
        default:
            return authState;
    }
}