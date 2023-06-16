import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoutes = ({ children }:any) => {
  
  const auth = useSelector((store:any) => store.AuthReducer.isAuth)

  const location = useLocation()

  return (
    auth ? children : <Navigate state={location.pathname} replace={true} to="/login" />
  )
}

export default PrivateRoutes