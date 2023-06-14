'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
  const currentPathname = usePathname();
  const router = useRouter();

  const isActive = currentPathname === `/${href}`;
  console.log('currentPathname', currentPathname);
  const style = {
    marginRight: 10,
    color: isActive ? 'red' : 'blue',
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
