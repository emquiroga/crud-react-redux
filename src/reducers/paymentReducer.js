import { types } from "../types/types";

const initialState = {
    paymentData : []
}
export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.paymentAdd: 
        return {
            ...state,
            paymentData: [...state.paymentData, action.payload]
        };
        case types.paymentRead: 
        return {
            ...state,
            paymentData: action.payload
        };
        case types.paymentDelete: 
        return {
            ...state,
            paymentData: state.paymentData.filter((payment)=> {
                return payment.id !== action.payload
            })
        };
        case types.paymentClean:
        return {
            ...state,
            paymentData : []
        }
        default:
            return state;
    }
}