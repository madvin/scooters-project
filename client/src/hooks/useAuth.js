import { useContext } from 'react';
import request from '../utils/request';

export default function useAuth() {

    const authData = useContext(UserContext);