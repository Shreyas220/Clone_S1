import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();
//children here is App.js
export const DataLayer = ({initialState ,reducer , children}) => (

    <DataLayerContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </ DataLayerContext.Provider >

) 
export const useDataLayerValue = () => useContext(DataLayerContext);
