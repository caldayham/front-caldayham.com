// Navbar.tsx
import React from 'react';
import pageLinks from "@/data/pageLinks";
import styles from './navbar.module.css';
import ActiveLink from '@/components/ActiveLink';


export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ActiveLink href="/">
        <div className={styles.logo}>caldayham</div>
      </ActiveLink>

      <div className={styles.links}>
        {pageLinks.map((pageLink) => (
          <ActiveLink href={pageLink.path} key={pageLink.id}>
            <div className={styles.link}>{pageLink.title}</div>
          </ActiveLink>
        ))}

        <ActiveLink href="/connect">
          <div className={styles.actionLink}>Connect</div>
        </ActiveLink>
      </div>
    </nav>
  );
}
