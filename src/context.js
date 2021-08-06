import React, { useContext, useReducer } from 'react'
import reducer from './reducer'

const initialValue = {
  user: null,
  categories: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const Provider = AppContext.Provider

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>
}

// CUSTOM HOOK
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
