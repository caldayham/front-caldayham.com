'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';
import styles from './activeLinks.module.css';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
  linkType?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href, linkType }) => {
  const currentPathname = usePathname();
  const router = useRouter();

  const isActive = currentPathname === href;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    linkType === 'action' ? (
      <a href={href} onClick={handleClick} className={isActive ? styles.activeActionButton : styles.dormantActionButton}>
        {children}
      </a>
    ) : (
      <a href={href} onClick={handleClick} className={isActive ? styles.activeLink : styles.dormantLink}>
        {children}
      </a>
    )
  );
};

export default ActiveLink;