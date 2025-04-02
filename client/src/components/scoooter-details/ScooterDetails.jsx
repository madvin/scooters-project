// import { Link, useNavigate, useParams } from 'react-router';
// import { Box, Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// import { useDeleteScooter, useScooter } from '../../api/scooterApi';
// import useAuth from '../../hooks/useAuth';

// export default function ScooterDetails() {
//     const theme = useTheme();
//     const navigate = useNavigate();
//     const { email, userId } = useAuth();
//     const { scooterId } = useParams();
//     const { scooter } = useScooter(scooterId);
//     const { deleteScooter } = useDeleteScooter();

//     const scooterDeleteClickHandler = async () => {
//         const hasConfirm = confirm(`Are you sure you want to delete ${scooter.title} scooter?`);

//         if(!hasConfirm) {
//             return;
//         }

//         await deleteScooter(scooterId);
//         navigate('/market');
//     };

    // const isOwner = userId === scooter._ownerId;

    // return (
    //   //TODO
    // )
    
// }
