import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup,  } from "firebase/auth"
import { getProfile,  setProfileData, updateProfile } from "./../services/profile"

export const AuthContext = createContext([])
const authRef= auth
const provider = new GoogleAuthProvider()

function Auth({children}) {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const userStorage = window.localStorage.getItem('@User');
    
        if (userStorage) {
            setUser(JSON.parse(userStorage));
            setLoading(false)
        } else {
            setUser(null);
            setLoading(false)
        }
    }, []);
    
    useEffect(() => {
        async function getProfileUser(){
        try{
            const res = await getProfile(user.uid)
            if(res){
                setProfile(res)
            }
            
        } catch (error) {
            console.log(error)
        }
        
        }
        if (user){

            getProfileUser()
        }
           
    }, [user]);
    

    async function login(email, password) {
        try {
            const res =  await signInWithEmailAndPassword(
                authRef, 
                email, 
                password
            )
            setUser(res.user)
            window.localStorage.setItem('@AccessToken', res.user.accessToken)
            window.localStorage.setItem('@User', JSON.stringify(res.user))
            return res
            } catch(error) {
            console.log(error);
            return error
            }
    }

    async function signUp(authRef, email, password) { 
        try {
            const res = await createUserWithEmailAndPassword(
                authRef,
                email,
                password
            )
            await setProfileData({email}, res.user.uid)
        } catch (error) {
            console.log(error)
        }
    }
    

    async function forgotPassword(email) { 
        try{
            const res = await sendPasswordResetEmail(authRef, email)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    async function socialLogin() { 
        try{
            const res = await signInWithPopup(auth,provider)
            console.log(res)
        } catch (error) {
            console.log(error)
        }    
    }


    async function logout() {
        window.localStorage.removeItem('AccessToken')
        window.localStorage.removeItem('@User')
        setUser(null)
    }

    async function updateProfileUser(data) {
        try {
            await updateProfile(data, user.uid)
            const res = await getProfile(user.uid)
            if(res){
                setProfile(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <AuthContext.Provider  value={{ signed:!!user, user, profile, loading, login, signUp, forgotPassword, socialLogin, logout, updateProfileUser }}>
          {children}
        </AuthContext.Provider>
        </>
      )
}

export default Auth