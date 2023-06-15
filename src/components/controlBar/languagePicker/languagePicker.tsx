'use client';

import React, { ChangeEvent, useState } from 'react'
import styles from './languagePicker.module.css'

export default function LanguagePicker() {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
        // Add logic here to update the language in your application
    };

    return (
        <select value={language} onChange={changeLanguage} className={styles.selector}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            {/* add other language options as needed */}
        </select>
    );
};