import React, { useState } from 'react'
import Header from './Header'

const LogIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const isSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <div>
            <Header />
            <div className=' absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
            </div>
            <form className=' absolute w-3/12 p-12 bg-black my-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75 '>
                <h1 className=' font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder='full name' className=' my-4 p-2 w-full bg-zinc-500' />}
                <input type="email" placeholder='Email' className=' my-4 p-2 w-full bg-zinc-500' />
                <input type="password" placeholder='Password' className=' my-4 p-2 w-full bg-zinc-500' />
                <button className=' my-4 p-4 bg-red-600 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='p-4' onClick={isSignInForm}>{isSignIn ? "New to Netflix?Sign Up Now" : "Already Registered?Sign In Now"}</p>
            </form>
        </div>
    )
}

export default LogIn