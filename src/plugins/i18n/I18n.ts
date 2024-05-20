
import { createI18n } from 'vue-i18n'
import { en, ja, ko, vi } from 'vuetify/locale'
import MessageEn from '@assets/locales/message_en.json'
import MessageJa from '@assets/locales/message_ja.json'
import MessageKo from '@assets/locales/message_ko.json'
import MessageVi from '@assets/locales/message_vi.json'
import datetimeFormats from './datetimeFormats'
import numberFormats from './numberFormats'

type FallbackLocale = 'en' | 'ja' | 'ko' | 'vi'
interface MessageSchema extends Record<string, any> {
    $vuetify: typeof en
}
interface MessageLanguages extends Record<FallbackLocale, MessageSchema> { }

const messages: MessageLanguages = {
    en: {
        ...MessageEn,
        $vuetify: {
            ...en,
            ...MessageEn.$vuetify
        },
    },
    ja: {
        ...MessageJa,
        $vuetify: {
            ...ja,
            ...MessageJa.$vuetify
        },
    },
    ko: {
        ...MessageKo,
        $vuetify: {
            ...ko,
            ...MessageKo.$vuetify
        },
    },
    vi: {
        ...MessageVi,
        $vuetify: {
            ...vi,
            ...MessageVi.$vuetify
        },
    },
}

export default createI18n<[MessageSchema], FallbackLocale, false, {}>({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n, you must set `false`, to use Composition API
    locale: document.documentElement.lang,
    fallbackLocale: ['en', 'ja', 'ko', 'vi'],
    messages,
    datetimeFormats,
    numberFormats,
    missingWarn: false,
    fallbackWarn: false
})
