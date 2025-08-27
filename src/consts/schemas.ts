// Constants and functions

export const MSG_EMPTY = "No puede dejar este espacio vacío.";

export const MSG_ONLY_NUMBERS = "Este campo debe ser numérico.";

export const MSG_TERMS = "Debes aceptar los términos y condiciones.";

export const MSG_FORMAT_USERNAME_INCORRECT = "Solo minúsculas, números y '_'.";

export const MSG_FORMAT_EMAIL_INCORRECT =
    "Por favor, cíñase al formato correcto: example@example.com.";

export const MSG_FORMAT_PASSWORD_INCORRECT =
    "Debe tener al menos una mayúsucla, número y símbolo.";

export const MSG_FORMAT_REPEAT_PASSWORD_INCORRECT =
    "Las contraseñas no coinciden.";

export const msgMaxCharacters: (value: number) => string = (value: number) =>
    `No debe exeder los ${value} caracteres.`;

export const msgMinCharacters: (value: number) => string = (value: number) =>
    `Debe tener al menos ${value} caracteres.`;

export const msgMinELO: (value: number) => string = (value: number) =>
    `Debes tener al menos ${value} punto ELO.`;

export const msgMaxELO: (value: number) => string = (value: number) =>
    `No debe exeder los ${value} punto ELO.`;

// Regular Expressions

export const EMAIL_REGULAR_EXPRESSION =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const USERNAME_REGULAR_EXPRESSION = /^[a-z0-9_]+$/;

export const PASSWORD_REGULAR_EXPRESSION =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).*$/;
