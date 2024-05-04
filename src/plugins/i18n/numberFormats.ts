import { IntlNumberFormat } from "vue-i18n"

const numberFormats: Record<string, IntlNumberFormat> = {
    'en': {
        currency: {
            style: 'currency', currency: 'USD', notation: 'standard', currencyDisplay: 'symbol'
        },
        decimal: {
            style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    },
    'ja': {
        currency: {
            style: 'currency', currency: 'JPY'
        },
        decimal: {
            style: 'decimal', minimumSignificantDigits: 2, maximumSignificantDigits: 2
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    },
    'ko': {
        currency: {
            style: 'currency', currency: 'KRW'
        },
        decimal: {
            style: 'decimal', minimumSignificantDigits: 2, maximumSignificantDigits: 2
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    },
    'vi': {
        currency: {
            style: 'currency', currency: 'VND', useGrouping: true
        },
        decimal: {
            style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    }
}

export default numberFormats