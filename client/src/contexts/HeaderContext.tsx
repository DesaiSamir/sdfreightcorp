// HeaderContext.tsx

import React, { createContext, useContext, useRef } from 'react';

// Create a context to hold the headerRef value
export const HeaderContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

// Custom hook to access the headerRef from the context
export function useHeaderRef() {
    const headerRef = useContext(HeaderContext);
    if (!headerRef) {
        throw new Error('useHeaderRef must be used within a HeaderProvider');
    }
    return headerRef;
}

// Define the type for the children prop
type HeaderProviderProps = {
    children: React.ReactNode;
};

// HeaderProvider component to wrap the Header component and pass the headerRef value
export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
    const headerRef = useRef<HTMLDivElement>(null);
    return <HeaderContext.Provider value={headerRef}>{children}</HeaderContext.Provider>;
};
