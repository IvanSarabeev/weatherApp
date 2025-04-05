"use client";

import {Fragment} from "react";
import Image from "next/image";
import Header from "@/components/header";

const Footer = () => {
    return (
        <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="text-black dark:text-white">Made with 💗 by Weather Application / Team</p>
            </div>
        </footer>
    )
};

export default function Home() {
    return (
        <Fragment>
            <Header />
            <main className="min-h-screen container padding-container"></main>
            <Footer />
        </Fragment>
    );
}
