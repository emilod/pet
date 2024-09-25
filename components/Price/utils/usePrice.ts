import { useI18n } from '@overdose/components'

import type { Money } from '../declarations/Price.types'

export const usePrice = () => {
  const i18n = useI18n()
  let locale = i18n?.locale

  const formatPrice = (price: Money) => {
    const currency = price?.currency || 'AUD'

    /**
     * When the currency is not AUD and the locale is en-AU force the locale to
     * en-NZ for better price formatting.
     *
     * 'en-AU' formats prices in currencies other than AUD an unfamiliar way.
     *
     * eg:
     * - $123.45 US dollars with locale 'en-AU' is displayed as: "USD 123.45" (ugly)
     * - $123.45 US dollars with locale 'en-NZ' is displayed as: "US$123.45" (better)
     */
    if (currency !== 'AUD' && locale === 'en-AU') {
      locale = 'en-NZ'
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    })
      .format(price?.amount)
      .replace(/\.00$/g, '')
  }

  return { formatPrice }
}
