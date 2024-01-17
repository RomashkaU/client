// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './translations/es/global.json';
import ru from './translations/ru/global.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      es: { translation: es },
    },
    lng: 'ru', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;