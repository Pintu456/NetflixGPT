import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LogIn from './LogIn'
import Browse from './Browse'

const Body = () => {




    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LogIn />} />
                    <Route path='/browse' element={<Browse />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Body