import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <>
      <Image src="/icons/64.png" alt="VercelDrive" width="36" height="36" />
      <div className={styles.logo}>
        <span className={styles.logo__title}>VercelDrive</span>
        <span className={styles.logo__subtitle}>Next.js OneDrive directory app</span>
      </div>
    </>
  )
}
