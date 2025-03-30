import { useEffect } from 'react';
import { useContext } from 'react';

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
try {
    const login = async (email, password) => {

        request.post(`${baseUrl/login}`, { email, password });

    }
    return { login };
}
catch (error) {
        console.error('Error in useLogin:', error);
        throw error;
    }
};
