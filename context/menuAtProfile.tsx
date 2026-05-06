"use client"

import { ReactNode, useContext, useState,createContext } from "react";

interface MenuContextType {
    currentMenu: string;
    setCurrentMenu: (menu: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [currentMenu, setCurrentMenu] = useState("All")
    return (
        <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () => {
    const context = useContext(MenuContext)
    if (!context) throw new Error("useMenu must be used within MenuProvider")
    
    return context
}