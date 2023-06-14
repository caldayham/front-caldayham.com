import React from 'react'
import styles from './page.module.css'

export default function ConnectPage() {
    return (
      <div className={styles.container}>
        <h1>connect with Cal!</h1>
        <p>to connect with cal (via email, phone, or any other supported message) you must first submit something you find interesting.</p>
        <p>steps: fill out the form below, only links are accepted, and then explain in less that 200 words why this object you have linked to is interesting to you.</p>
        <p>I review all submissions and if I feel </p>
        <p>if for some reason you don't get an email from me with contact information within 24 hours of submitting your request, you should either try again, find another way to get in contact with me, give up, or I've been fairly busy and haven't reviewed your submission yet. Do what you will with the information you have.</p>
        <p>if you have any questions, comments, or concerns, please email me <a href="mailto:lolimagineifIjustputmyemailhere@amazon.com">here</a>.</p>
      </div>
    )
  }
  