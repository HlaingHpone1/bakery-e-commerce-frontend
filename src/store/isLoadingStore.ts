import { create } from "zustand";

interface LoadingProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const loadingStore = create<LoadingProps>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
}));
