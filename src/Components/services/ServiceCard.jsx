import { Link } from "react-router";

export default function ServiceCard({ service }) {
    const { serviceName, image, rating, price, serviceId } = service;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            {/* Image */}
            <figure>
                <img
                    src={image}
                    alt={serviceName}
                    className="h-48 w-full object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{serviceName}</h2>

                {/* Rating + Price */}
                <div className="flex justify-between items-center mt-2">
                    <p className="font-semibold text-yellow-500">⭐ {rating}</p>

                    <p className="font-bold text-primary">${price}</p>
                </div>

                {/* Button */}
                <div className="card-actions justify-center mt-4">
                    <Link
                        to={`/service-details?id=${serviceId}`}
                        className="btn btn-primary btn-sm"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
