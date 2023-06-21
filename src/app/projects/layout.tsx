import React from "react";
import styles from "./page.module.css";

export default function ProjectsLayout({ children } : { children: React.ReactNode}) {

    return (
        <div>
            <h1>Projects</h1>
            {children}
        </div>
    );
};