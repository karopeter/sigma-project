// SET UP THE DATALAYER
// WE NEED THIS TO TRACK THE TRANSACTION
import React, {createContext, useContext, useReducer } from 'react';

// PREPARES THE DATALAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext);