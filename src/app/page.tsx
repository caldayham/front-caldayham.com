import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <div className={styles.openingContent}>
        <div className={styles.item}>
          <h1 className={styles.introTitle}>Hello,&nbsp;<span className={styles.break}> </span>my name is Cal.</h1>
          <h1 style={{ margin: '2rem 0rem 2rem 0rem' }}>Welcome! ヽ(‘ ∇‘ )ノ</h1>
          <p>The primary directive of this site is to serve as the primary source of information on myself, Cal!</p>
          <p>The main unit of information on this site are posts, essentially text and image documentation of any object that relates to myself and I want to make public.</p>
        </div>
        <div className={styles.imgItem}>
          <Image src='/images/2022-snapper-zoom.jpg' alt='cal x snapping turtle' width={200} height={320} className={styles.img} />
        </div>
      </div>

      <div className={styles.mainContent}>
        <p>Thank you for visiting my website, the primary source of public information on myself, Cal!</p>
        <p>I hope you find it helpful :)</p>
        <p>The main unit of information on this site are posts, essentially text and image documentation of any object that relates to myself and I want to make public.</p>
        <p>These posts are organized into three main categories for our convenience;&nbsp;
          <Link href={'/thoughts'} style={{ textDecoration: 'underline' }}>thoughts</Link>,&nbsp;
          <Link href={'/projects'} style={{ textDecoration: 'underline' }}>projects</Link>,
          and <Link href={'/lessons'} style={{ textDecoration: 'underline' }}>lessons</Link>.
        </p>
        <p>There is an additional, and highly useful page,&nbsp;
          <Link href={'/connect'} style={{ textDecoration: 'underline' }}>connect</Link>.
          Which has an enjoyable way of contacting me to prevent spam and spur interesting interaction, and a list of all my social media accounts.
        </p>
        <p>enjoy</p>
      </div>
    </>
  )
}
