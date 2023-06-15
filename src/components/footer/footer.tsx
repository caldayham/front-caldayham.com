import styles from './footer.module.css'
import SocialIcons from '../socialIcons/socialIcons'

export default function Footer() {
  return (
    <div className={styles.container}>
      <SocialIcons />

      <p className={styles.copyright}>©2023 caldayham.com - all rights reserved.</p>
    </div>
  )
}