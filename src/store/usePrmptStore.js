import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const usePromptStore = create()(
  devtools(
    persist(
      (set) => ({
        page: "create",
        setPage: (page) => {
          set({ page });
        },
      }),
      { name: "prompts" }
    )
  )
);
