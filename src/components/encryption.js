import { useState } from 'react'
import CryptoJS from 'crypto-js'
import { useRouter } from 'nextra/hooks'

import styles from './encryption.module.css'

const AES_SECRET_KEY = 'onedrive-vercel-index'

const obfuscateToken = token => {
  const encrypted = CryptoJS.AES.encrypt(token, AES_SECRET_KEY)
  return encrypted.toString()
}

const i18n = {
  en: {
    title: 'Obfuscate your client secret',
    labelInput: 'Your client secret:',
    labelOutput: 'Your obfuscated client secret:',
  },
  vi: {
    title: 'Mã hóa client secret của bạn',
    labelInput: 'Client secret của bạn:',
    labelOutput: 'Client secret đã được mã hóa:',
  },
}

export default function Encryption() {
  const { locale: rawLocale } = useRouter()
  const locale = rawLocale || 'en'
  const t = i18n[locale] || i18n.en

  const [token, setToken] = useState('')
  const obfuscatedToken = token && obfuscateToken(token)

  return (
    <div className={styles.container}>
      <div className={styles.title}>{t.title} 👇</div>
      <div className={styles.label}>{t.labelInput}</div>
      <input
        className={styles.input}
        onChange={e => setToken(e.target.value)}
        placeholder="5e07Q~..."
      />
      <div className={styles.label}>{t.labelOutput}</div>
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
