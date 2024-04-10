import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constant';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.


        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                // ...
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, []);
    return (
        <div className=' absolute px-8 py-2 bg-gradient-to-b from-black w-full font-bold bg-no-repeat z-10 flex justify-between'>
            <img className=' w-44' src={NETFLIX_LOGO} alt="logo" />

            {user && <div className=' flex p-4'>
                <img className='w-12 h-12 p-1 rounded-full' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="usericon" />
                <button onClick={signOutHandler} className=' text-slate-300' >(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header