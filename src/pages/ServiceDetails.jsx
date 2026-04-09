import { useParams } from "react-router";
import services from "../data/winterServices.json";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ServiceDetails() {
    const { id } = useParams();

    const service = services.find((s) => s.serviceId === parseInt(id));

    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    if (!service) {
        return <p className="text-center mt-10">Service not found</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Service booked successfully!");
        setForm({ name: "", email: "" });
    };

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <img
                src={service.image}
                className="rounded-xl w-full h-64 object-cover"
            />

            <h1 className="text-3xl font-bold mt-6">{service.serviceName}</h1>

            <p className="mt-2">{service.description}</p>

            <div className="mt-4 space-y-1">
                <p>Provider: {service.providerName}</p>
                <p>Email: {service.providerEmail}</p>
                <p>Category: {service.category}</p>
                <p>⭐ Rating: {service.rating}</p>
                <p className="font-semibold text-primary">
                    Price: ${service.price}
                </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                    className="input input-bordered w-full"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />

                <input
                    className="input input-bordered w-full"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />

                <button className="btn btn-primary w-full">Book Now</button>
            </form>
        </div>
    );
}
