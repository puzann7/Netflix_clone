import { createContext, useContext } from "react";
import { app } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";


 const authContext = createContext();

 const firebaseAuth = getAuth(app)
 const database = getDatabase(app)
 const googleProvider = new GoogleAuthProvider();

 export const AuthContextProvider = ({children})=>{
    const signUpUserWithEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const signUpUserWithGoogle =  ()=>{
       return  signInWithPopup(firebaseAuth, googleProvider)
    }
    const setData = (key,data)=>{
         set(ref(database,key),data);
    }
    return(
        <authContext.Provider value={{signUpUserWithEmailAndPassword, signUpUserWithGoogle}}>
            {children}
        </authContext.Provider>
    )
 }
 const useAuth = ()=>{
    return  useContext(authContext);
 }
 export default useAuth;
