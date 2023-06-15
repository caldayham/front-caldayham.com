import React from 'react'
import styles from './page.module.css'

export default function ConnectPage() {
    return (
      <div className={styles.main}>
        <h1>Connect with Cal!</h1>
        <p>To connect with cal (via email, phone, or any other supported message) you must first submit something you find interesting.</p>
        <p>steps: fill out the form below, only links are accepted, and then explain in less that 200 words why this object you have linked to is interesting to you.</p>
        <p>I review all submissions and if I find it interesting I will reach out to you via your provided method.</p>

        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" />
          <label htmlFor="link">Link</label>
          <input type="text" id="link" name="link" placeholder="https://www.example.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="I think this is interesting because..." />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" />
          <button type="submit" className={styles.submitButton}>Submit (sorry, currently disabled, check back soon)</button>
        </form>
      </div>
    )
  }
  