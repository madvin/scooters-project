import { Link } from 'react-router';

export default function ScooterItem({
    _id,
    brand,
    model,
    imageUrl,
    price,
}) {
    return (
        <div className="allScooters">
            <div className="allScooters-info">
                <h2>{brand} {model}</h2>
                <img src={imageUrl} alt={`${brand} ${model}`} />
                <p>Price: {price} BGN</p>
                <Link to={`/scooter/${_id}/details`} className="details-btn">Details</Link>
            </div>
        </div>
    )
}