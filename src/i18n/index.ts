import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
    DEFAULT_LANGUAGE,
    I18N_STORAGE_KEY,
    SUPPORTED_LANGUAGES,
} from "../consts/i18n";
import esCommon from "../locales/es/common.json";
import enCommon from "../locales/en/common.json";
import esHome from "../locales/es/home.json";
import enHome from "../locales/en/home.json";
import esCourses from "../locales/es/courses.json";
import enCourses from "../locales/en/courses.json";
import esCourseDetail from "../locales/es/courseDetail.json";
import enCourseDetail from "../locales/en/courseDetail.json";
import esProfessor from "../locales/es/professor.json";
import enProfessor from "../locales/en/professor.json";
import esDashboard from "../locales/es/dashboard.json";
import enDashboard from "../locales/en/dashboard.json";
import esClassroom from "../locales/es/classroom.json";
import enClassroom from "../locales/en/classroom.json";
import esAuth from "../locales/es/auth.json";
import enAuth from "../locales/en/auth.json";
import esValidation from "../locales/es/validation.json";
import enValidation from "../locales/en/validation.json";

/** Namespace por defecto (claves sin prefijo resuelven aquí). */
export const defaultNS = "common";

/** Todos los recursos de traducción, agrupados por idioma y namespace. */
export const resources = {
    es: {
        common: esCommon,
        home: esHome,
        courses: esCourses,
        courseDetail: esCourseDetail,
        professor: esProfessor,
        dashboard: esDashboard,
        classroom: esClassroom,
        auth: esAuth,
        validation: esValidation,
    },
    en: {
        common: enCommon,
        home: enHome,
        courses: enCourses,
        courseDetail: enCourseDetail,
        professor: enProfessor,
        dashboard: enDashboard,
        classroom: enClassroom,
        auth: enAuth,
        validation: enValidation,
    },
} as const;

export const namespaces = ["common", "home", "courses", "courseDetail", "professor", "dashboard", "classroom", "auth", "validation"] as const;

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        ns: [...namespaces],
        supportedLngs: [...SUPPORTED_LANGUAGES],
        fallbackLng: DEFAULT_LANGUAGE,
        defaultNS,
        load: "languageOnly",
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            lookupLocalStorage: I18N_STORAGE_KEY,
            caches: ["localStorage"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

/** Mantiene <html lang> sincronizado con el idioma activo (accesibilidad/SEO). */
const applyHtmlLang = (lng: string): void => {
    document.documentElement.lang = lng;
};

applyHtmlLang(i18n.resolvedLanguage ?? DEFAULT_LANGUAGE);
i18n.on("languageChanged", applyHtmlLang);

export default i18n;
