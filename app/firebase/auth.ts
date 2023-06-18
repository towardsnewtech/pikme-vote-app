import { app, auth, db, storage } from './config'

import { ref, uploadBytesResumable } from 'firebase/storage'
import { setDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { 
    createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, getAuth, onAuthStateChanged, updatePassword, signInWithCredential, GoogleAuthProvider
} from 'firebase/auth'

import { setSelectedAccount } from '../store/slices/auth.slice' ;
import { useAppDispatch } from '../store/hooks' ;

export const SignUpUser = async (userEmail: string, userPassword: string) => {
    try {
        let credential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);

        if(auth.currentUser) {
            await sendEmailVerification(auth.currentUser)
        }

        await setDoc(doc(db, "Users", credential.user.uid), {
            userEmail,
            firstname: '',
            lastname: '',
            username: '',
            balance: 0
        })

        return { success: true }
    } catch(err) {
        return { success: false, err }
    }
}

export const SignInUser = async (userEmail: string, userPassword: string) => {
    try {
        let credential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
        
        if (!auth.currentUser?.emailVerified) {
            return { success: false, message: 'Please verify your email first' }
        }

        let userProfile = await getDoc(doc(db, "Users", credential.user.uid))

        return { success: true, userProfile: userProfile.data(), password: userPassword };
        
    } catch (err) {
        if(err) {
            if(err.toString().indexOf('too-many-requests') >= 0) {
                return {success: false, message: 'Too Many Requests'} ;
            }
            if(err.toString().indexOf('wrong-password') >= 0) {
                return {success: false, message: 'Wrong Password'};
            }
            if(err.toString().indexOf('user-not-found') >= 0) {
                return {success: false, message: 'User Not Found'};
            }
        }
    }
}

export const SignInWithGoogle = async (idToken: any) => {
    try {
        const credential = await GoogleAuthProvider.credential(idToken);
        const res = await signInWithCredential(auth, credential);
        console.log("----> ", res);

        let userProfile = await getDoc(doc(db, "Users", res.user.uid))
        console.log(userProfile);

        return { success: true, userProfile: userProfile.data() };
        
    } catch (err) {
        if(err) {
            if(err.toString().indexOf('too-many-requests') >= 0) {
                return {success: false, message: 'Too Many Requests'} ;
            }
            if(err.toString().indexOf('wrong-password') >= 0) {
                return {success: false, message: 'Wrong Password'};
            }
            if(err.toString().indexOf('user-not-found') >= 0) {
                return {success: false, message: 'User Not Found'};
            }
        }
    }
}

export const SendPasswordResetEmail = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const updateUser = async (userInfo: any) => {
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                await updateDoc(doc(db, "Users", user.uid), {
                    firstname: userInfo.userFirstName,
                    lastname: userInfo.userLastName,
                    username: userInfo.userName,
                    userEmail: userInfo.userEmail
                })
                
            }
        })

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const loadUser = async () => {
    const dispatch = useAppDispatch() ;

    try {
        const auth = await getAuth();
        await onAuthStateChanged(auth, async (user) => {
            if (user) {
                let docSnap = await getDoc(doc(db, "Users", user.uid))
                let userInfo = await docSnap.data()
                dispatch(setSelectedAccount(userInfo))
            }
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const changePassword = async (oldpassword: string, newpassword: string, password: string) => {
    const auth = getAuth();
    if (password != oldpassword) {
        return {success: false, message: 'Wrong Old Password'}
    }

    onAuthStateChanged(auth, async (user) => {
        if (user)
            updatePassword(user, newpassword)
    })

    return {success: true}
}

export const uploadImage = async (uri: any) => {
    try {
        const response = await fetch(uri) ;
        const blob = await response.blob();
        const filename = uri.substring(uri.lastIndexOf('/') + 1)
        var storageRef = ref(storage, 'images/' + filename) ;
        const uploadTask = await uploadBytesResumable(storageRef, blob) ;

        return true;
    } catch (error) {
        console.log(error) ;
    }
}

/*
{
    "_tokenResponse": {
        "displayName": "", 
        "email": "im.adam.p.mcdowell@gmail.com", 
        "expiresIn": "3600", 
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwZTFkMjM5MDllNzZmZjRhNzJlZTA4ODUxOWM5M2JiOTg4ZjE4NDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGlja21lLTZlNDUxIiwiYXVkIjoicGlja21lLTZlNDUxIiwiYXV0aF90aW1lIjoxNjg0MjkyODc1LCJ1c2VyX2lkIjoiUlpNWTBjaTB0MWZxN2R3Um0xMDhQektoRzRzMSIsInN1YiI6IlJaTVkwY2kwdDFmcTdkd1JtMTA4UHpLaEc0czEiLCJpYXQiOjE2ODQyOTI4NzUsImV4cCI6MTY4NDI5NjQ3NSwiZW1haWwiOiJpbS5hZGFtLnAubWNkb3dlbGxAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiaW0uYWRhbS5wLm1jZG93ZWxsQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OIX5b9-dvs67V02sngi9p49GWwpxlxlnuscZqyj1Umm0DljoWyrVMRfE3jt-fYe9yKOfZAsmqGbaBaVV_znRZl2zJS20-nVNXP6XEZUVbMMy47ZYhX9i7bS27al0DR8lXI8cd02bsUQW6mAfXOT6qvChRv0spDSQ3C_fWLRjoUCBEEVqEi18Up2GJ4mFg1jYVpLIPLCF0WBF36ua4dHqkrm9mSnQty1tgSnvGPVTre3WcW1A8LKplc4bAiB21uljNLMpBXqULbvfaDYvvfZE4EjgksaMcfKTxxQrSXfcX_RCyUOjnDI1vmCrZvZzcb_sYjdJi5NPbrmqSnRmsJeI7A", 
        "kind": "identitytoolkit#VerifyPasswordResponse", 
        "localId": "RZMY0ci0t1fq7dwRm108PzKhG4s1", 
        "refreshToken": "APZUo0RcTyqTwQIn9fH53kiWBf5mo52b_yp0VuBnnDWu-VdnvA8ySqM7y2VIDAnjZt_2Tk3xq8p650_PaoDQ5DD9fseDOrcBn-QTzzNpRaSPCs_XJzpFVIEISKI-o9Joq91DrEoxwuC5CLhGMLArzpYj8Lplhaw_lAZisTtJA7G05Tmogl2KFyNpQfvv1lhqudz87z2QJyouK0ZcZ5S0wcSEQcxZd8zK2A", 
        "registered": true
    }, 
    "operationType": "signIn", 
    "providerId": null, 
    "user": {
        "_redirectEventId": undefined, 
        "apiKey": "AIzaSyBTsG6YtJGZ4fNTFgjhhNy7yzLWEeyzbC4", 
        "appName": "[DEFAULT]", 
        "createdAt": "1684291440667", 
        "displayName": undefined, 
        "email": "im.adam.p.mcdowell@gmail.com", 
        "emailVerified": true, 
        "isAnonymous": false, 
        "lastLoginAt": "1684292875168", 
        "phoneNumber": undefined, 
        "photoURL": undefined, 
        "providerData": [Array], 
        "stsTokenManager": [Object], 
        "tenantId": undefined, 
        "uid": "RZMY0ci0t1fq7dwRm108PzKhG4s1"
    }
}
*/