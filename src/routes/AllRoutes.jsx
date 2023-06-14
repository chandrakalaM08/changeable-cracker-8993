import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route to="/" element={<HomePage />}></Route>

            </Routes>
        </div>
    )
}

export default AllRoutes