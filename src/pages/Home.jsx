import HeroSlider from "../Components/home/HeroSlider";
import PremiumAboutSection from "../Components/home/PremiumAboutSection";
import WinterCareTips from "../Components/home/WinterCareTips";
import PopularServices from "../Components/services/PopularServices";

export default function Home() {
    return (
        <>
            <HeroSlider />
            <PopularServices />
            <WinterCareTips />
            <PremiumAboutSection />
        </>
    );
}
