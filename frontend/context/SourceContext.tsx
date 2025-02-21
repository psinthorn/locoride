"use client"

import React, { createContext, useContext, useState  } from "react";

interface SourceContextType {
  source: any[];
  setSource: React.Dispatch<React.SetStateAction<any[]>>;
}

const SourceContext = createContext<SourceContextType | undefined>(undefined);

export default function SourceContextProvider({ children } : { children: React.ReactNode })  {
  const [source, setSource] = useState<any[]>([]);

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

