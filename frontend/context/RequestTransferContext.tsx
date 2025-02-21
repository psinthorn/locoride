"use client";

import { createContext, useContext, useState } from 'react';

type RequestTransferProviderProps = {
  children: React.ReactNode;
};

type requestTransferType = {
  source: string;
  destination: string;
  distance: number;
  carType: string;
  carModel: string;
  rate: number;
};

type RequestTransferContextType = {
  requestTransfer: requestTransferType | undefined;
  setRequestTransfer: React.Dispatch<React.SetStateAction<requestTransferType | undefined>>;
};

const RequestTransferContext = createContext<RequestTransferContextType | undefined>(undefined);

export default function RequestTransferContextProvider({ children }: RequestTransferProviderProps) {
  const [requestTransfer, setRequestTransfer] = useState<requestTransferType | undefined>(undefined);

  return (
    <RequestTransferContext.Provider 
      value={{ 
        requestTransfer, 
        setRequestTransfer 
        }}>
        {children}
    </RequestTransferContext.Provider>
  )
};

export function useRequestTransferContext() {
  const context = useContext(RequestTransferContext);
  if (!context) {
    throw new Error('useRequestTransfer must be used within a RequestTransferContextProvider');
  }
  return context;
}