import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext=createContext(null);
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=(email,password)=>{
        return signOut(auth);
    }

    const handleGoogle=(GoogleProvider)=>{
        return signInWithPopup(auth,GoogleProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser)
            setLoading(false)
        }));
        return()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        handleGoogle,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;