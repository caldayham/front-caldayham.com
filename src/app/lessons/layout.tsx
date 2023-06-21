import React from "react";
import styles from "./page.module.css";

export default function LessonsLayout({ children } : { children: React.ReactNode}) {

    return (
        <div>
            <h1>Lessons</h1>
            {children}
        </div>
    );
};