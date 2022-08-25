export default function authReducer(state = false, action){
    switch (action.type) {
        case "authenticated":
            state = true;
            return state;
        case "notAuth":
            state = false;
            return state;
        default:
            return state;
    }
}