import React from "react";
import "./App.css";
import ButtonOne from "./Components/Buttons/ButtonOne";
import "./styles/bannersStyle.css";
import "./styles/BoxShadow.css";
import "./styles/Buttons.css";
import "./styles/inputs.css";
import "./styles/colorPlates.css";
import "./styles/globals.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import BoxShadow from "./Components/BoxShadow/BoxShadow";
import InputOne from "./Components/Inputs/InputOne";
import GlassMorphism from "./Components/GlassMorphism/GlassMorphism";
import ColorPlates from "./Components/ColorPlates/ColorPlates";
import Navbar from "./Components/Navbar/Navbar";
import TailwindButton from "./Components/Buttons/TailwindButtons";
function App() {
    const footerData = [
        {
            icon: "https://img.icons8.com/sf-regular/48/000000/github.png",
            link: "https://github.com/lenwoper",
            alt: "github",
        },
        {
            icon: "https://img.icons8.com/fluency/48/000000/mail.png",
            link: "mailto:lenwoper@gmail.com",
            alt: "mail",
        },
        {
            icon: "https://img.icons8.com/color/48/000000/twitter--v1.png",
            link: "https://twitter.com/the___abhijeet",
            alt: "twitter",
        },

        {
            icon: "https://img.icons8.com/color/48/000000/instagram-new--v1.png",
            link: "",
            alt: "instagram",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<ButtonOne />} />
                    <Route path="/tw-buttons" element={<TailwindButton />} />
                    <Route path="/shadow" element={<BoxShadow />} />
                    <Route path="/inputs" element={<InputOne />} />
                    <Route path="/glassmorphism" element={<GlassMorphism />} />
                    <Route path="/color-palettes" element={<ColorPlates />} />
                    <Route path="*" element={<ButtonOne />} />
                </Routes>
            </main>
            <Footer footer={footerData} />
        </div>
    );
}

export default App;
