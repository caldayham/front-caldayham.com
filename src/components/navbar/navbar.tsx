'use client';

import Link from "next/link";
import React from 'react';
import pageLinks from "@/data/pageLinks";
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        caldayham
      </Link>

      <div className={styles.links}>
        {pageLinks.map((pageLink) => (

          <Link href={pageLink.path} key={pageLink.id} className={styles.link}>
            {pageLink.title}
          </Link>

        ))}

        <Link href={'/connect'} className={styles.actionLink}>
          Connect
        </Link>
      </div>
    </div>
  )
}