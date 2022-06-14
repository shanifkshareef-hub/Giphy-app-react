import React from 'react'
import {createContext,useState} from 'react'

export const gifClickContext = createContext(null)



function  Click({children}) {
    const [state,setState]= useState(false)
  return (
    <gifClickContext.Provider value={{state,setState}}>
    {children}
    </gifClickContext.Provider>
  )
}

export default  Click