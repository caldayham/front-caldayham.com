import React, { useState, ChangeEvent } from "react";
import styles from "./controlBar.module.css";
import SearchInput from "./searchInput/searchInput";
import ThemeToggle from "./themeToggle/themeToggle";
import LanguagePicker from "./languagePicker/languagePicker";

export default function ControlBar() {

    return (
        <div className={styles.container}>
            <SearchInput />
            <div className={styles.controls}>
                <LanguagePicker />
                <ThemeToggle />
            </div>
        </div>
    );
};
