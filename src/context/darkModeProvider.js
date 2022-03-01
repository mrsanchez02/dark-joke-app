import React,{useState} from 'react'
import darkModeContext from './darkModeContext'

const DarkModeProvider = ({children}) => {

    const [dark,setDark]=useState(false);

    const darkMode = () => {
        setDark(!dark)
    }

    return (
        <darkModeContext.Provider
            value={{
                dark,
                darkMode
            }}
        >
        {children}
        </darkModeContext.Provider>
    )
}

export default DarkModeProvider
