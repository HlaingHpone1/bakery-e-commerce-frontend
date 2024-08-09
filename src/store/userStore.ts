import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStore {
  logInUser: boolean;
  name: string;
  email: string;
  token: string;
  role: string;

  setLogInUser: (logInUser: boolean) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
  logOut: () => void;
}

export const userStore = create<UserStore>()(
  devtools(
    persist<UserStore>(
      (set) => ({
        logInUser: false,
        name: "",
        email: "",
        token: "",
        role: "",

        setLogInUser: (logInUser: boolean) => set({ logInUser: logInUser }),
        setName: (name: string) => set({ name: name }),
        setEmail: (email: string) => set({ email: email }),
        setToken: (token: string) => set({ token: token }),
        setRole: (role: string) => set({ role: role }),

        logOut: () => {
          set(() => ({
            logInUser: false,
            userData: null,
          }));
          localStorage.removeItem("userStore");
        },
      }),
      {
        name: "userStore",
      }
    )
  )
);
