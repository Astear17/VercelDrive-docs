import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faGaugeHigh, faPalette, faServer } from '@fortawesome/free-solid-svg-icons'

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
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const path = window.location.pathname
    if (path.startsWith('/vi')) setLocale('vi')
  }, [])

  const icons = {
    'free-to-host': faServer,
    'setup-time': faCloudArrowUp,
    'fast-n-responsive': faGaugeHigh,
    'highly-customisable': faPalette,
  }

  const t = featureTranslations[locale] || featureTranslations.en

  return (
    <div className="vd-features">
      {['free-to-host', 'setup-time', 'fast-n-responsive', 'highly-customisable'].map(feature => (
        <div key={feature} className="vd-feature">
          <FontAwesomeIcon icon={icons[feature]} width={18} />
          {t[feature]}
        </div>
      ))}
    </div>
  )
}
