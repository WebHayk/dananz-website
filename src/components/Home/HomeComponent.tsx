import React, {FC, memo} from "react";
import HeaderComponent from "../common/HeaderComponent";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import ContactUsSection from "./ContactUsSection";
import FooterComponent from "../common/FooterComponent";

export const HomeComponent: FC = memo(() => {
    return (
        <>
            <HeaderComponent/>
            <main>
                <HomeSection/>
                <AboutSection/>
                <GallerySection/>
                <ContactUsSection/>
            </main>
            <FooterComponent/>
        </>
    )
});

HomeComponent.displayName = "HomeComponent";
