'use client';


import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input type="checkbox" checked={mode === 'light'} onChange={toggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};