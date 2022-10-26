import React, { useState, useContext } from 'react'
import sublinks from './data'

// My main context variable
const AppContext = React.createContext()

// My App provider
export const AppProvider = ({ children }) => {

    // useState method for Sidebar component
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    // useState method for Modal component
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

    // Handler Function for Sidebar Component
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    // Handler Function for Sidebar Component
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    // Handler Function for Sidebar Component
    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }
    // Handler Function for Sidebar Component
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        /* Passing value and state through props */
        <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu }}>
            {children}
        </AppContext.Provider>
    )
}

// Exporting the context Fn
export const useGlobalContext = () => {
    return useContext(AppContext)
}