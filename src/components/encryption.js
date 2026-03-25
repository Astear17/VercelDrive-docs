import { useState } from 'react'
import CryptoJS from 'crypto-js'

import styles from './encryption.module.css'

const obfuscateToken = token => {
  const AES_SECRET_KEY = 'VercelDrive'
  const encrypted = CryptoJS.AES.encrypt(token, AES_SECRET_KEY)
  return encrypted.toString()
}

export default function Encryption() {
  const [token, setToken] = useState('')
  const obfuscatedToken = token && obfuscateToken(token)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Obfuscate your client secret 👇</div>
      <div className={styles.label}>Your client secret:</div>
      <input
        className={styles.input}
        onChange={e => setToken(e.target.value)}
        placeholder="5e07Q~..."
      />
      <div className={styles.label}>Your obfuscated client secret:</div>
      <input
        style={{ opacity: 0.8, cursor: "not-allowed" }}
        className={styles.input}
        value={obfuscatedToken}
        onClick={e => e.target.select()}
        readOnly
      />
    </div>
  )
}
