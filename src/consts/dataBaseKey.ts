// v2: la BBDD guarda contenido con campos por idioma {es,en} (feature i18n,
// paso 4). Versionar la clave fuerza un re-seed limpio a quien tenga datos
// con la estructura antigua (solo espanol), evitando una app rota. Ver STATE.
export const DATABASE_KEY = "DATA_BASE_v2";
export const USER_AUTH_KEY = "UserAuth";
