import { createContext, useReducer } from 'react';

export const DreamsContext = createContext();

export const dreamsReducer = (state, action) => {
    switch (action.type){
        case "SET_DREAMS": 
            return {
                dreams: action.payload
            }
        case "CREATE_DREAM":
            return {
                dreams: [action.payload, ...state.dreams]
            }
        default:
            return state;
    }
}

export const DreamsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dreamsReducer, {
        dreams: null
    });

    return(
        <DreamsContext.Provider value={{...state, dispatch}}>
            { children }
        </DreamsContext.Provider>
    )
}