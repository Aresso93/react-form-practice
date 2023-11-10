import { createContext, useContext } from "react";

export const formContentContext = createContext('')

export const useFormContContext = () => useContext(formContentContext)