import { useRef } from 'react';
import NavBar from '../Components/Nav-Bar';
import HeroSection from '../Components/Hero';
import Coaches from '../Components/Coaches';
import Pricing from '../Components/Pricing';
import Footer from '../Components/Footer';

export default function Landing() {
    const pricingRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToPricing = () => {
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <NavBar onScrollToPricing={scrollToPricing} onScrollToFooter={scrollToFooter} />
            <HeroSection />
            <Coaches />
            <div ref={pricingRef}>
                <Pricing />
            </div>
            <div ref={footerRef}>
                <Footer />
            </div>
        </>
    );
}