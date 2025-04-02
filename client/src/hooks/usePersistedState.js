import { useState } from 'react';

export default function usePersistedState(stateKey, initialState) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(stateKey);

    if (!stored) {
      return typeof initialState === 'function'
        ? initialState()
        : initialState;
    }

    try {
      return JSON.parse(stored);
    } catch (err) {
      console.warn(`Failed to parse localStorage[${stateKey}]:`, err);
      return typeof initialState === 'function'
        ? initialState()
        : initialState;
    }
  });

  const setPersistedState = (input) => {
    const value = typeof input === 'function' ? input(state) : input;

    try {
      localStorage.setItem(stateKey, JSON.stringify(value));
    } catch (err) {
      console.warn(`Failed to save to localStorage[${stateKey}]:`, err);
    }

    setState(value);
  };

  return [state, setPersistedState];
}
