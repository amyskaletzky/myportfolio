// MyContext.js
import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [active, setActive] = useState('homepage');

    return (
        <Context.Provider value={{ active: active, setActive: setActive }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };