import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
    return (
        <div className="">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="h-[70vh] speed={1200}"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        }}
                    >
                        <div className="bg-black/50 w-full h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-6 text-white">
                                <h1 className="text-5xl font-bold mb-4">
                                    Keep Your Pets Warm This Winter ❄️
                                </h1>
                                <p className="mb-6 max-w-lg">
                                    Expert winter care services to keep your
                                    furry friends safe, cozy, and healthy.
                                </p>
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-primary">
                                        Explore Services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center"
                        style={{
                            backgroundImage:
                                "url(https://plus.unsplash.com/premium_photo-1663011219208-418276022b35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        }}
                    >
                        <div className="bg-black/50 w-full h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-6 text-white">
                                <h1 className="text-5xl font-bold mb-4">
                                    Trusted Pet Experts 🐾
                                </h1>
                                <p className="mb-6 max-w-lg">
                                    Professional vets and caregivers ready 24/7
                                    during cold seasons.
                                </p>
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-accent">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        }}
                    >
                        <div className="bg-black/50 w-full h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-6 text-white">
                                <h1 className="text-5xl font-bold mb-4">
                                    Winter Safety First 🧣
                                </h1>
                                <p className="mb-6 max-w-lg">
                                    Grooming, clothing, nutrition and emergency
                                    care for cold weather.
                                </p>
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-primary">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
