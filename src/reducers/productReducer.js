import { lkdProducts } from "../util";

export default function productReducer(state = lkdProducts, action) {
    switch (action.type) {
        case "add__product":
            state = action.products;
            return state;
        case "remove_product":
            return state;
    
        default:
            return state;
    }
}