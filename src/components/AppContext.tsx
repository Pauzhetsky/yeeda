// src/AppContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

type AppContextType = {
    breadcrumbs: string[];
    setBreadcrumbs: (crumbs: string[]) => void;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    currentView: 'home' | 'category' | 'collection';
    setCurrentView: (view: 'home' | 'category' | 'collection') => void;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [breadcrumbs, setBreadcrumbs] = useState(['Главная']);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState<'home' | 'category' | 'collection'>('home');

    return (
        <AppContext.Provider
            value={{
                breadcrumbs,
                setBreadcrumbs,
                selectedCategory,
                setSelectedCategory,
                currentView,
                setCurrentView,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
