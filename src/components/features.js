import { useRouter } from 'next/router'
import styles from './features.module.css'

const featureTranslations = {
  en: {
    'free-to-host': 'Completely free to host',
    'setup-time': 'Setup time under 15 minutes',
    'fast-n-responsive': 'Fast and responsive',
    'highly-customisable': 'Highly customisable',
  },
  vi: {
    'free-to-host': 'Lưu trữ hoàn toàn miễn phí',
    'setup-time': 'Cài đặt trong dưới 15 phút',
    'fast-n-responsive': 'Nhanh và hỗ trợ đa nền tảng',
    'highly-customisable': 'Dễ dàng tùy chỉnh',
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
