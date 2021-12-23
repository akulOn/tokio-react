import { createContext, useContext } from "react";
import MainStore from "./mainStore";

interface Store {
  mainStore: MainStore;
}

export const store: Store = {
    mainStore: new MainStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
