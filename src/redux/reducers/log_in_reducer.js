const logInReducer = (state =false,action) => {
    switch(action.type){
        case "SIGN_IN_ASYNC_WORKER":
            return action.payLoad;
        case "LOG_OUT":
            return false
        default:
            return state
    }
}
export default logInReducer;