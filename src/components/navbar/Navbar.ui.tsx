'use client';

import Link from "next/link";
import React from 'react';
import pageLinks from "@/data/pageLinks";

export default function Navbar() {
  return (
    <div>
      <Link href={'/'}>caldayham.com</Link>

      <div style={{display: 'flex', gap: '1rem'}}>
        {pageLinks.map((pageLink) => (
          <div key={pageLink.id}>
            <Link href={pageLink.path}>{pageLink.title}</Link>
          </div>
        ))}
      </div>

      <button onClick={() => {
        console.log('signing out');
      }}>
        Sign Out</button>
    </div>
  )
}