import React, { useEffect, useContext } from 'react'
import { Context as AuthContext, Context } from '../../context/authContext'

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(Context)

  useEffect(() => {
    tryLocalSignin()
  }, [])
  return null
}

export default ResolveAuthScreen
