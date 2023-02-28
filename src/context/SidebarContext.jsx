import React, { useContext } from 'react'
import {createContext,useState,useEffect} from 'react'


export const SidebarContext = createContext();

const SidebarProvider=({children})=>{

    const [isOpen,setIsOpen] = useState(false)

    const handelClose=()=>{
        setIsOpen(false)
    }

    
    return(
        <SidebarContext.Provider value={{isOpen,setIsOpen,handelClose}}>
            {children}
        </SidebarContext.Provider>
        );
        
}



export default SidebarProvider;