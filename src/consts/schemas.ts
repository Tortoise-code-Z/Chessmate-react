// Expresiones regulares de validación de formularios.
// Los mensajes de validación viven en el namespace i18n `validation`
// y los esquemas se construyen con la función `t` (ver src/Schemas/*).

export const EMAIL_REGULAR_EXPRESSION =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const USERNAME_REGULAR_EXPRESSION = /^[a-z0-9_]+$/;

export const PASSWORD_REGULAR_EXPRESSION =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).*$/;
