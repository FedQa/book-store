import {create} from "zustand/react";


interface LoadingState {
    isLoading: boolean;
    setIsLoading(isLoading: boolean): void;
}

export const loadingStore = create<LoadingState>((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({isLoading: value}),
}))