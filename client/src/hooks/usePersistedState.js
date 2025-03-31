import { useState } from 'react';

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        if (!persistedState) {
            return typeof initialState === 'function' ? initialState() : initialState;
        }
        try {
            return JSON.parse(persistedState);
        } catch (error) {
            console.error(`Error parsing persisted state for key "${key}":`, error);
            return initialState;
        }
    });
    const setPersistedState = (input) => {
        const data = typeof input === 'function' ? input(state) : input;

        const persistedData = JSON.stringify(data);
        localStorage.setItem(key, persistedData);
        setState(data);
    }
    return [state, setPersistedState];
}