import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const depositAmount = async (amount: any) => {
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                let docSnap = await getDoc(doc(db, "Users", user.uid))
                let userInfo = await docSnap.data()
                
                await updateDoc(doc(db, "Users", user.uid), {
                    balance: parseInt(userInfo?.balance) + parseInt(amount)
                })
            }
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const withdrawAmount = async (amount: any) => {
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                let docSnap = await getDoc(doc(db, "Users", user.uid))
                let userInfo = await docSnap.data()
                
                await updateDoc(doc(db, "Users", user.uid), {
                    balance: parseInt(userInfo?.balance) - parseInt(amount)
                })
            }
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}