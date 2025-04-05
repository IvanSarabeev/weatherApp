"use client";

import {useTheme} from "next-themes";
import {useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {useLocalStorage} from "@/hooks/useLocalStorage";

export default function ThemeToggle() {
    const {setTheme} = useTheme();

    const [themeStorage, setThemeStorage] = useLocalStorage<"light" | "dark">(
        "theme",
        "dark",
    );

    useEffect(() => {
        if (themeStorage) {
            setTheme(themeStorage);
        }
    }, []);

    const isDark = themeStorage === "dark";

    const handeThemeChange = () => {
        const newTheme = themeStorage === "dark" ? "dark" : "light";

        setTheme(newTheme);
        setThemeStorage(newTheme)

        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <Button
            variant="outline"
            onClick={handeThemeChange}
            className={`flex-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
        >
            {isDark ? (
                <Sun className='size-6 text-yellow-500 rotate-0 transition-all'/>
            ) : (
                <Moon className='size-6 text-blue-500 rotate-0 transition-all' />
            )}
            <span className='sr-only'>Toggle Theme</span>
        </Button>
    )
}