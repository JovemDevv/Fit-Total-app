import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

export const AuthContext = createContext([])
const authRef= auth
const provider = new GoogleAuthProvider()

function Auth({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userStorage = window.localStorage.getItem('@User');
    
        if (userStorage) {
            setUser(JSON.parse(userStorage));
        } else {
            setUser(null);
        }
    }, []);
    

    

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

    async function signUp(email, password) { 
        try {
            const res = await createUserWithEmailAndPassword(
                authRef,
                email,
                password
            )
            console.log(res)
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

    return (
        <>
        <AuthContext.Provider  value={{ signed:!!user, user, login, signUp, forgotPassword, socialLogin, logout }}>
          {children}
        </AuthContext.Provider>
        </>
      )
}

export default Auth
