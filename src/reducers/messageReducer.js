export default function messageReducer(state = null, action){
    switch (action.type) {
        case "preamble":
            state = "Hey there 👋, i saw your item and i would like we make a swap! Pls reply me when you can, thanks";
            return state;
        case "diable":
            state =null;
            return state;
            
        default:
            return state;
    }
}