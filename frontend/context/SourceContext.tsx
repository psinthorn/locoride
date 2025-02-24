"use client"

import React, { createContext, useContext, useState  } from "react";

interface SourceContextType {
  source: any[] | undefined;
  setSource: React.Dispatch<React.SetStateAction<any[] | undefined>>;
}

const SourceContext = createContext<SourceContextType | undefined>(undefined);

export default function SourceContextProvider({ children } : { children: React.ReactNode })  {
  const [source, setSource] = useState<any[] | undefined>(undefined);

  return (
    <SourceContext.Provider
      value={{
        source,
        setSource
      }}>
      {children}
    </SourceContext.Provider>
  )
}

export function useSourceContext() {
  const context = useContext(SourceContext);
  if (!context) {
    throw new Error('useSourceContext must be used within a SourceContextProvider');
  }
  return context;
}

