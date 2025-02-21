"use client";

import React, { createContext, useContext, useState } from "react";

type DestinationContextType = {
  destination: any[];
  setDestination: React.Dispatch<React.SetStateAction<any[]>>;
};

const DestinationContext = createContext<DestinationContextType | undefined>(undefined);

export default function DestinationContextProvider({ children } : {children: React.ReactNode}) {
  const [destination, setDestination] = useState<any[]>([])
  return (
    <DestinationContext.Provider 
      value={
        {
        destination,
        setDestination
        }
      }>
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestinationContext() {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error('useDestinationContext must be used within a DestinationContextProvider');
  }
  return context;
}