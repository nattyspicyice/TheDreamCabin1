import { DreamsContext } from "../context/DreamContext";
import { useContext } from "react";

export const useDreamsContext = () => {
    const context = useContext(DreamsContext);

    if (!context) {
        throw Error('useDreamsContext must be used inside a DreamsContextProvider')
    }

    return context;
}