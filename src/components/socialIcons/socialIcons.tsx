import React from "react";
import styles from "./socialIcons.module.css";
import socialAccounts from '@/data/socialAccounts'
import Image from "next/image";

export default function SocialIcons() {

    return (
        <div className={styles.socialIcons}>
            {socialAccounts.map((socialAccount) => (
                <a key={socialAccount.id} href={socialAccount.link} className={styles.socialLink} target='_blank' rel="noopener noreferrer">
                    <Image src={socialAccount.iconPath} alt={`${socialAccount.platform} icon`} width={32} height={32} className={styles.icon} />
                </a>
            ))}
        </div>
    );
};