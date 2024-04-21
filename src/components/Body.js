import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LogIn from './Login'
import Browse from './Browse'

const Body = () => {




    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/browse' element={<Browse />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Body