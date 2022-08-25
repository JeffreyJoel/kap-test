export const referalReducer = (state = "Hello", action) =>{
    switch (action.type) {
        case "setRefId":
            state = action.referee;
            return state;
    
        default:
            return state;
    }
}