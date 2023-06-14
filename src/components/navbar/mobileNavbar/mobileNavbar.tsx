'use client';

import React from 'react';
import pageLinks from "@/data/pageLinks";
import styles from './mobileNavbar.module.css';
import ActiveLink from '@/components/activeLinks/activeLinks';

export default function MobilepNavbar() {

  return (
    <nav className={styles.mobileContainer}>
    <div className={styles.mobileTop}>
      <ActiveLink href="/">
        <div className={styles.logo}>caldayham</div>
      </ActiveLink>

      <ActiveLink href="/connect" linkType='action'>
        <div className={styles.actionLink}>Connect</div>
      </ActiveLink>
    </div>

    <div className={styles.mobileLinks}>
      {pageLinks.map((pageLink) => (
        <ActiveLink href={pageLink.path} key={pageLink.id}>
          <div className={styles.link}>{pageLink.title}</div>
        </ActiveLink>
      ))}
    </div>
  </nav>
  );
}
