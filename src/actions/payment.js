import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

export const newPayment = (amount) => {
    return async (dispatch, getState) => {
        const {uid} = getState().login;

        const data = {
            date : new Date().toLocaleDateString(),
            amount,
        }
        const ref = await db.collection(`${uid}/payment/payment`).add(data)
        const id = await ref.id;
        const newData = {
            ...data,
            id,
        }
        dispatch(createPayment(newData))
    }
}

export const readPayments = (data) => {
    return {
        type: types.paymentRead,
        payload: data
    }
}
export const createPayment = (data) => {
    return {
        type: types.paymentAdd,
        payload: data
    }
}

export const deletePayment = (id) => {
    const deleteId = (id) => {
        return {
            type: types.paymentDelete,
            payload: id,
        }
    }
    return async (dispatch, getState) => {
        const {uid} = getState().login
        await db.doc(`${uid}/payment/payment/${id}`).delete()
        dispatch(deleteId(id))
    }   
}

export const cleanPayment = () => {
    return {
        type: types.paymentClean
    }
}


