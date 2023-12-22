"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

const ThemeSwitchMode: React.FC = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };


    return (
        <Switch
            defaultSelected
            size="lg"
            color="secondary"
            onClick={handleTheme}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <LuSun className={className} />

                ) : (
                    <LuMoon className={className} />

                )
            }
        >
        </Switch>
    );

}
export default ThemeSwitchMode;