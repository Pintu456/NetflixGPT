import React, { useRef, useState } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux'

import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { BG_URL, PROFILE_ICON } from '../utils/constant';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const isSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const buttonClickHandler = () => {
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message)

        if (message) return;

        if (!isSignIn) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: PROFILE_ICON
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))

                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    // ...


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + " " + errorMessage);
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                });

        }
    }

    return (
        <div>
            <Header />
            <div className=' absolute'>
                <img src={BG_URL} alt="background " className=' object-cover w-screen h-screen ' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=' absolute w-full  sm:w-3/12 p-12 bg-black my-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75 '>
                <h1 className=' font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input ref={name} type="text" placeholder='full name' className=' my-4 p-2 w-full bg-zinc-500' />}
                <input type="email" ref={email} placeholder='Email' className=' my-4 p-2 w-full bg-zinc-500' />
                <input type="password" ref={password} placeholder='Password' className=' my-4 p-2 w-full bg-zinc-500' />
                <p className=' p-4 font-bold text-red-500'>{errorMessage}</p>
                <button onClick={buttonClickHandler} className=' my-4 p-4 bg-red-600 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='p-4 cursor-pointer' onClick={isSignInForm}>{isSignIn ? "New to Netflix?Sign Up Now" : "Already Registered?Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;