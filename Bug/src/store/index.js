import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-slice";

export const useAppstore = create((set) => ({
    ...createAuthSlice(set),
}));
