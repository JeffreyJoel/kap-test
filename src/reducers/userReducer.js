export default function userReducer(state = null, action){
    switch (action.type) {
        case "login_USER":
            state = action.user;
            return state;
        case "new_PRODUCT":
            return{
                ...state,
                products: action.products
            }
        case "logout":
            state = null;
            return state;
    
        default:
            return state;
    }
}