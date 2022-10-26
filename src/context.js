import React, { useState, useContext } from 'react'
import sublinks from './data'

// My main context variable
const AppContext = React.createContext()

// My App provider
export const AppProvider = ({ children }) => {

    // useState method for Sidebar component (initial state as false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    // useState method for Modal component (initial state as false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    // useState method for the submenu component (initial state an empty object)
    const [location, setLocation] = useState({})

    // Handler Function for Sidebar Component
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    // Handler Function for Sidebar Component
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    // Handler Function for Sidebar Component
    /**
     * 
     * @param {string} text // String that 
     * @param {object} coords // Object of coordinates that will centerize my submenu 
     */
    const openSubmenu = (text, coords) => {
        setLocation(coords)
        setIsSubmenuOpen(true)
    }
    // Handler Function for Sidebar Component
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        /* Passing value and state through props */
        <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu, location }}>
            {children}
        </AppContext.Provider>
    )
}

// Exporting the context Fn
export const useGlobalContext = () => {
    return useContext(AppContext)
}