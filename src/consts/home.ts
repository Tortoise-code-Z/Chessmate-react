/**
 * Imágenes de las tarjetas destacadas de la Home. Los textos (título y
 * descripción) son traducibles y viven en `locales/<idioma>/home.json`
 * (clave `cards`), zippeados por índice con esta lista en `CoursesDataSection`.
 */
export const coursesDataImages: { id: number; url: string }[] = [
    { id: Math.random(), url: "static-image-cp-1_640x427_.webp" },
    { id: Math.random(), url: "static-image-cp-2_640x480_.webp" },
    { id: Math.random(), url: "static-image-cp-3_640x426_.webp" },
];
