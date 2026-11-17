import { Language, SUPPORTED_LANGUAGES } from "../consts/i18n";
import {
    AuthorCurseData,
    CourseJSON,
    DefualtCourse,
    JsonOpinion,
    LocalizedText,
    LocalizedTextList,
    StoredAuthor,
    StoredCourse,
    StoredDefaultCourse,
    StoredOpinion,
} from "../types/types";
import { isArray, isObject, isString } from "../utils/general";

/**
 * Resolvedores de contenido por idioma.
 *
 * La BBDD (seed + localStorage) guarda el texto con campos por idioma
 * (`LocalizedText` / `LocalizedTextList`). Estas funciones traducen esas
 * estructuras "almacenadas" a los tipos "resueltos" con string plano que
 * consumen hooks y componentes, escogiendo la variante del idioma activo.
 *
 * Punto unico de resolucion: si manana se anade un idioma, solo cambia
 * `LocalizedText` y estas funciones, no las vistas.
 *
 * Tolerancia a datos corruptos (ADR-018): localStorage es editable, asi que
 * la BBDD puede no cumplir los tipos `Stored*` (campos a `null`, listas que
 * no son listas...). Los resolvedores NUNCA lanzan: si un dato no es valido
 * dejan `undefined` en su hueco y siguen con el resto. Son los componentes
 * (`isString`/`isNumber`/`asArray` + `SecurityRendering`/`WarningMsg`) quienes
 * detectan el hueco y muestran el aviso, como antes del multilenguaje. Asi un
 * dato roto degrada solo su parte, no toda la query.
 */

/**
 * Hueco para un dato almacenado que no cumple su tipo.
 *
 * Es el UNICO cast del modulo y marca la frontera de datos no confiables:
 * los tipos resueltos describen el contrato esperado y la comprobacion real
 * se hace en los componentes (mismo supuesto que el `JSON.parse` de la BBDD).
 */
const missing = <T>(): T => undefined as unknown as T;

/** Aplica `fn` si `value` es un objeto; si no, deja el hueco. */
const ifObject = <T, R>(value: T, fn: (safe: T) => R): R =>
    isObject(value) ? fn(value) : missing<R>();

/**
 * Mapea `list` si es un array (cada elemento pasa por `ifObject`); si no lo
 * es, deja el hueco. Un elemento roto queda como `undefined` sin afectar al
 * resto.
 */
const mapObjects = <T, R>(list: T[], fn: (item: T) => R): R[] =>
    isArray<T>(list) ? list.map((item) => ifObject(item, fn)) : missing<R[]>();

/**
 * Escoge la variante escalar del idioma pedido.
 *
 * Si esa variante no es valida, usa la de otro idioma soportado (en el orden
 * de `SUPPORTED_LANGUAGES`, que empieza por el idioma por defecto). Si no hay
 * ninguna valida, devuelve el hueco (`undefined`) para que la vista avise.
 */
export const pick = (text: LocalizedText, lang: Language): string => {
    if (!isObject(text)) return missing<string>();

    const wanted: unknown = text[lang];
    if (isString(wanted)) return wanted;

    const fallback = SUPPORTED_LANGUAGES.map(
        (language): unknown => text[language]
    ).find(isString);

    return fallback ?? missing<string>();
};

/**
 * Escoge la variante lista (p. ej. parrafos) del idioma pedido, con el mismo
 * criterio de respaldo que `pick`. Solo comprueba que sea un array: validar
 * cada elemento es cosa de la vista.
 */
export const pickList = (list: LocalizedTextList, lang: Language): string[] => {
    if (!isObject(list)) return missing<string[]>();

    const wanted: unknown = list[lang];
    if (isArray<string>(wanted)) return wanted;

    const fallback = SUPPORTED_LANGUAGES.map(
        (language): unknown => list[language]
    ).find((variant) => isArray<string>(variant));

    return isArray<string>(fallback) ? fallback : missing<string[]>();
};

export const resolveAuthor: (
    author: StoredAuthor,
    lang: Language
) => AuthorCurseData = (author, lang) =>
    ifObject(author, (a) => ({
        id: a.id,
        name: pick(a.name, lang),
        description: pick(a.description, lang),
        level: a.level,
        elo: a.elo,
        image: a.image,
    }));

export const resolveCourse: (course: StoredCourse, lang: Language) => CourseJSON =
    (course, lang) =>
        ifObject(course, (c) => ({
            courseID: c.courseID,
            title: pick(c.title, lang),
            level: c.level,
            imageUrl: c.imageUrl,
            createdAt: c.createdAt,
            sales: c.sales,
            shortDescription: pick(c.shortDescription, lang),
            detailDescription: pick(c.detailDescription, lang),
            price: c.price,
            content: ifObject(c.content, (content) => ({
                themes: mapObjects(content.themes, (theme) => ({
                    id: theme.id,
                    title: pick(theme.title, lang),
                    description: pick(theme.description, lang),
                    content: mapObjects(theme.content, (subtheme) => ({
                        id: subtheme.id,
                        title: pick(subtheme.title, lang),
                        cover: subtheme.cover,
                        video: subtheme.video,
                    })),
                })),
                detailDescription: pickList(content.detailDescription, lang),
            })),
            toLearn: ifObject(c.toLearn, (toLearn) => ({
                themes: mapObjects(toLearn.themes, (theme) => ({
                    id: theme.id,
                    title: pick(theme.title, lang),
                    description: pick(theme.description, lang),
                })),
                detailDescription: pickList(toLearn.detailDescription, lang),
            })),
            authors: c.authors,
        }));

export const resolveDefaultCourse: (
    course: StoredDefaultCourse,
    lang: Language
) => DefualtCourse = (course, lang) =>
    ifObject(course, (c) => ({
        courseID: c.courseID,
        title: pick(c.title, lang),
        level: c.level,
        imageUrl: c.imageUrl,
        content: ifObject(c.content, (content) => ({
            detailDescription: pick(content.detailDescription, lang),
            themes: mapObjects(content.themes, (theme) => ({
                id: theme.id,
                images: theme.images,
                title: pick(theme.title, lang),
                description: pick(theme.description, lang),
            })),
        })),
    }));

export const resolveOpinion: (
    opinion: StoredOpinion,
    lang: Language
) => JsonOpinion = (opinion, lang) =>
    ifObject(opinion, (o) => ({
        id: o.id,
        idUser: o.idUser,
        text: pick(o.text, lang),
    }));
