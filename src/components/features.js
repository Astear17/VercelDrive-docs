import { useRouter } from 'next/router'
import styles from './features.module.css'

const featureTranslations = {
  en: {
    'free-to-host': 'Completely free to host 💸',
    'setup-time': 'Setup time < 15 mins ⏱',
    'fast-n-responsive': 'Fast ⚡ and responsive 💦',
    'highly-customisable': 'Highly customisable ⚒',
  },
  vi: {
    'free-to-host': 'Hoàn toàn miễn phí 💸',
    'setup-time': 'Thiết lập < 15 phút ⏱',
    'fast-n-responsive': 'Nhanh - gọn - lẹ ⚡',
    'highly-customisable': 'Dễ dàng tuỳ chỉnh ⚒',
  },
}

export default function Features() {
  const { locale, defaultLocale } = useRouter()

  return (
    <div className={styles.features}>
      {['free-to-host', 'setup-time', 'fast-n-responsive', 'highly-customisable'].map(feature => (
        <div key={feature} className={styles.feature}>
          {featureTranslations[locale][feature] ?? featureTranslations[defaultLocale][feature]}
        </div>
      ))}
    </div>
  )
}
