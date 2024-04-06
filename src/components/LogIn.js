import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';

const LogIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const isSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const buttonClickHandler = () => {
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message)
        email.current.value = null;
        password.current.value = null;

    }
    return (
        <div>
            <Header />
            <div className=' absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=' absolute w-3/12 p-12 bg-black my-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75 '>
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

export default LogIn