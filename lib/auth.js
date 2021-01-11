import React, { useState, useEffect, useContext, createContext } from 'react'
import { createUser } from './db'
import firebase from './firebase'

const authContext = createContext()

export function useAuth() {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('useAuth must be used within the AuthProvider')
  }
  return context
}

function useAuthProvider() {
  const [user, setUser] = useState(null)

  function formatUser(user) {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL,
    }
  }

  function handleUser(rawUser) {
    if (rawUser) {
      const user = formatUser(rawUser)
      createUser(user)
      setUser(user)
      return user
    } else {
      setUser(false)
      return false
    }
  }

  const signinWithGithub = () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(response => handleUser(response.user))

  const signout = () => firebase.auth().signOut().then(handleUser)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    user,
    signinWithGithub,
    signout,
  }
}

export function AuthProvider({ children }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
