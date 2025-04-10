import { createContext, useContext } from "react";
import { firebaseConfig } from "../../firebase/firebase";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

 const authContext = createContext();
 const firebaseApp = initializeApp(firebaseConfig);
 const firebaseAuth = getAuth(firebaseApp)
 const database = getDatabase(firebaseApp)

 export const AuthContextProvider = ({children})=>{
    const signUpUserWithEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const setData = (key,data)=>{
         set(ref(database,key),data);
    }
    return(
        <authContext.Provider value={{signUpUserWithEmailAndPassword}}>
            {children}
        </authContext.Provider>
    )
 }
