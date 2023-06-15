'use client';

import React, { useState } from "react";
import styles from "./themeToggle.module.css";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        // You can also add logic here to update the theme in your application
    };


    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};
