import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";


 const authContext = createContext();

 const firebaseAuth = getAuth(app)
 const database = getDatabase(app)
 const googleProvider = new GoogleAuthProvider();

 export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const signUpUserWithEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const logInUserWithEmailAndPassword = (email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth, email,password)
    }
    const signUpUserWithGoogle =  ()=>{
       return  signInWithPopup(firebaseAuth, googleProvider)
    }
    const setData = (key,data)=>{
         set(ref(database,key),data);
    }
    const logOutUser = ()=>{
        return signOut(firebaseAuth)
    }
    useEffect(() => {
        onAuthStateChanged(firebaseAuth,(user)=>{
            if(user){
                console.log("hello",user);
                setUser(user);
            }
            else{
                console.log("Logged out");
                setUser(null);
            }
            setLoader(false)
        })
      },[user])
    return(
        <authContext.Provider value={{signUpUserWithEmailAndPassword, signUpUserWithGoogle, user, loader, logOutUser}}>
            {children}
        </authContext.Provider>
    )
 }
 const useAuth = ()=>{
    return  useContext(authContext);
 }
 export default useAuth;
