import React, { createContext } from 'react'
import BlogsApI from "./api/BlogsAPI"


export const GlobalState = createContext()


export const DataProvider = ({children}) =>{

    const state = {
      blogsAPI: BlogsApI()
    }

    return (
      <GlobalState.Provider value={state}>
          {children}
      </GlobalState.Provider>
    )
}
