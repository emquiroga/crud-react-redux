import { db } from "../firebase/config-firebase"

export const loadData = async (uid) => {
const res = await db.collection(`${uid}/payment/payment`).get()
const data = []

res.forEach(
    (payment) => {
        const paymentData = (payment.data())
    
        data.push({
            id: payment.id,
            ...paymentData,

        });
    });
    return data
}