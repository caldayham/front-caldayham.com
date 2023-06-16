import styles from './footer.module.css'
import SocialIcons from '../socialIcons/socialIcons'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socialsContainer}>
        <SocialIcons />
      </div>

      <div className={styles.legalContainer}>
        <p className={styles.legal}>©2023 caldayham.com</p>
        <span className={styles.dot}>&nbsp;•&nbsp;</span>
        <p className={styles.legal}> all rights reserved.</p>
      </div>
    </div>
  )
}