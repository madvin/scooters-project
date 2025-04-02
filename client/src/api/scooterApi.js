import { useEffect, useState } from 'react';
import request from '../utils/request';
import useAuth from '../hooks/useAuth';

const baseUrl = 'http://localhost:3030/data/scooters';

export const useScooters = () => {

    const [scooters, setScooters] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setScooters);
        }, []);

        return { scooters };
    };

export const useScooter = (scooterId) => {
    const [scooter, setScooter] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${scooterId}`)
            .then(setScooter);
    }, [scooterId])

    return { scooter };
};

export const useLatestScooters = () => {
    const [latestScooters, setLatestScooters] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createOn desc',
            pageSize: 5,
            select: '_id,brand,model,imageUrl,price',
        });
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestScooters)
    }, [])
           
    return { latestScooters };
};

export const useCreateScooter = () => {
    const { request } = useAuth();

    const create = (scooterData) => 
        request.post(baseUrl, scooterData);
    return { create };
};

export const useEditScooter = () => {
    const { request } = useAuth();

    const edit = (scooterId, scooterData) => 
        request.put(`${baseUrl}/${scooterId}`, {...scooterData, _id: scooterId});
    return { edit };
};

export const useDeleteScooter = () => {
    const { request } = useAuth();

    const deleteScooter = (scooterId) =>
        request.delete(`${baseUrl}/${scooterId}`);
    return { deleteScooter };
};