import HeroSlider from "../Components/home/HeroSlider";
import PremiumAboutSection from "../Components/home/PremiumAboutSection";
import PopularServices from "../Components/services/PopularServices";

export default function Home() {
    return (
        <>
            <HeroSlider />
            <PopularServices />
            <PremiumAboutSection />
        </>
    );
}
