import { ReactNode, useState } from "react";
import { createContext } from "react";

interface LoadingProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const defaultValue: LoadingProps = {
  isLoading: false,
  setIsLoading: () => {
    console.warn("Is Loading function is not wrapped in a Loading Provider");
  },
};

export const LoadingContext = createContext<LoadingProps>(defaultValue);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
