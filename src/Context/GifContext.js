import React, { createContext,useState } from 'react'

 
export const gifContext = createContext(null)
function GifContext({children}) {
    

    const[gif,setGif] = useState()
  return (
    
        <gifContext.Provider value={{gif,setGif}}>
            {children}
        </gifContext.Provider>
  )
}

export default GifContext