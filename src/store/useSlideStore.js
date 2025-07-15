import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSlideStore = create(
  persist((set, get) => ({
    slide: [],
    setSlide: (slide) => set({ slide }),
  }))
);
