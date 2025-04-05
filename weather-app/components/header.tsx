"use client"

import Link from "next/link";
import Image from "next/image";
import {useTheme} from "next-themes";
import CitySearch from "@/features/navigation/city-search";
import ThemeToggle from "@/features/navigation/components/theme-toggle";

export default function Header() {
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <header className="sticky top-0 z-50 w-full py-2 border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container h-16 flex-items-center-between px-4 mx-auto">
                <Link href={"/"}>
                    <Image
                        src={isDark ? "/dark-logo.png" : "/light-logo.png"}
                        alt="logo"
                        width={56}
                        height={56}
                        lang="en-US"
                    />
                </Link>

                <div className="flex gap-4">
                    <CitySearch />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}