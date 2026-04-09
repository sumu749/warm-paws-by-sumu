import services from "../../data/winterServices.json";
import ServiceCard from "./ServiceCard";

export default function PopularServices() {
    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Popular Winter Care Services
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Keep your pets warm, healthy, and happy this winter
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
