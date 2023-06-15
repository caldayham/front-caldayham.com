import Image from 'next/image'
import styles from './footer.module.css'
import socialAccounts from '@/data/socialAccounts'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socialIcons}>
        {socialAccounts.map((socialAccount) => (
          <a key={socialAccount.id} href={socialAccount.link} className={styles.socialLink} target='_blank' rel="noopener noreferrer">
            <Image src={socialAccount.iconPath} alt={`${socialAccount.platform} icon`} width={32} height={32} className={styles.icon} />
          </a>
        ))}
      </div>
      
      <div>©2023 caldayham.com - all rights reserved.</div>
    </div>
  )
}