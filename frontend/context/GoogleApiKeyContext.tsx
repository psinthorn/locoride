import { createContext, useContext, useState  } from "react";

type GoogleApiKeyContextType = {
  googleApiKey: string;
  setGoogleApiKey: React.Dispatch<React.SetStateAction<string>>;
};

const  GoogleApiKeyContext = createContext<GoogleApiKeyContextType | null>(null);


export default function GoogleApiKeyContextProvider({ children } : { children: React.ReactNode }) {
  const [googleApiKey, setGoogleApiKey] = useState<string>('');
  return (
    <GoogleApiKeyContext.Provider value={{ 
      googleApiKey,
      setGoogleApiKey 
      }}>
      {children}
    </GoogleApiKeyContext.Provider>
  );
}

export const useGoogleApiKeyContext = () => {
  const context = useContext(GoogleApiKeyContext);
  if (!context) {
    throw new Error('useGoogleApiKeyContext must be used within a GoogleApiKeyContextProvider');
  }
  return context;
};