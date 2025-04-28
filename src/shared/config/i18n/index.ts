import i18next from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LngDetector from 'i18next-browser-languagedetector';
 
i18next 
    .use(Backend)
    .use(LngDetector)
    .use(initReactI18next)
    .use(resourcesToBackend((lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`)))
    .init({
        fallbackLng: "en",
        defaultNS: 'translation',
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['localStorage', 'cookie']
        },
        backend: {
            backends: [
                LocalStorageBackend,
                HttpApi,
            ]
        }
});

export default i18next;