import { Language } from "../consts/i18n";
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
 */

/** Escoge la variante escalar del idioma pedido. */
export const pick = (text: LocalizedText, lang: Language): string => text[lang];

/** Escoge la variante lista (p. ej. parrafos) del idioma pedido. */
export const pickList = (list: LocalizedTextList, lang: Language): string[] =>
    list[lang];

export const resolveAuthor: (
    author: StoredAuthor,
    lang: Language
) => AuthorCurseData = (author, lang) => ({
    id: author.id,
    name: pick(author.name, lang),
    description: pick(author.description, lang),
    level: author.level,
    elo: author.elo,
    image: author.image,
});

export const resolveCourse: (course: StoredCourse, lang: Language) => CourseJSON =
    (course, lang) => ({
        courseID: course.courseID,
        title: pick(course.title, lang),
        level: course.level,
        imageUrl: course.imageUrl,
        createdAt: course.createdAt,
        sales: course.sales,
        shortDescription: pick(course.shortDescription, lang),
        detailDescription: pick(course.detailDescription, lang),
        price: course.price,
        content: {
            themes: course.content.themes.map((theme) => ({
                id: theme.id,
                title: pick(theme.title, lang),
                description: pick(theme.description, lang),
                content: theme.content.map((subtheme) => ({
                    id: subtheme.id,
                    title: pick(subtheme.title, lang),
                    cover: subtheme.cover,
                    video: subtheme.video,
                })),
            })),
            detailDescription: pickList(course.content.detailDescription, lang),
        },
        toLearn: {
            themes: course.toLearn.themes.map((theme) => ({
                id: theme.id,
                title: pick(theme.title, lang),
                description: pick(theme.description, lang),
            })),
            detailDescription: pickList(course.toLearn.detailDescription, lang),
        },
        authors: course.authors,
    });

export const resolveDefaultCourse: (
    course: StoredDefaultCourse,
    lang: Language
) => DefualtCourse = (course, lang) => ({
    courseID: course.courseID,
    title: pick(course.title, lang),
    level: course.level,
    imageUrl: course.imageUrl,
    content: {
        detailDescription: pick(course.content.detailDescription, lang),
        themes: course.content.themes.map((theme) => ({
            id: theme.id,
            images: theme.images,
            title: pick(theme.title, lang),
            description: pick(theme.description, lang),
        })),
    },
});

export const resolveOpinion: (
    opinion: StoredOpinion,
    lang: Language
) => JsonOpinion = (opinion, lang) => ({
    id: opinion.id,
    idUser: opinion.idUser,
    text: pick(opinion.text, lang),
});
