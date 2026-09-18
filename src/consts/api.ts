/**
 * Claves i18n de los mensajes de error de la capa de datos.
 *
 * Los errores se lanzan como `new Error(CLAVE)` en `api/` y hooks, y se
 * traducen en el punto de visualización con `t(clave)` (react-i18next).
 * Las claves están cualificadas con el namespace (`common:...`) para que
 * resuelvan igual sea cual sea el namespace activo del componente/hook.
 * Textos en `locales/{es,en}/common.json` → bloque `errors`.
 */

export const ERROR_GET_USER_ID_MSG = "common:errors.getUserId";

export const ERROR_GET_COURSE_ID_MSG = "common:errors.getCourseId";
export const ERROR_GET_DATA_MSG = "common:errors.getData";
export const ERROR_GET_USER_MSG = "common:errors.getUser";

export const ERROR_GET_COURSE_MSG = "common:errors.getCourse";
export const ERROR_GET_COURSES_MSG = "common:errors.getCourses";
export const ERROR_GET_SUBTHEME_ID_MSG = "common:errors.getSubthemeId";
export const ERROR_GET_THEME_ID_MSG = "common:errors.getThemeId";
export const ERROR_GET_THEMES_ID_MSG = "common:errors.getThemesId";

export const ERROR_USER_PASSWORD_MSG = "common:errors.userPassword";
export const ERROR_USER_TAKEN_MSG = "common:errors.userTaken";
export const ERROR_EMAIL_EXIST_MSG = "common:errors.emailExist";
export const ERROR_SIGN_OUT_MSG = "common:errors.signOut";
