import { CourseDataItem } from "../types/types";

export const coursesDataItem: CourseDataItem[] = [
    {
        id: Math.random(),
        title: "Primeros pasos",
        description:
            "Con nuestros cursos para principiantes aprenderás a dominar todo sobre el tablero (nomenclatura, posición, etc) y además los movimientos y habilidades de cada una de las piezas del ajedrez",
        url: "static-image-cp-1_640x427_.webp",
    },
    {
        id: Math.random(),
        title: "Aperturas",
        description:
            "Aprenderás las aperturas más comunes de l ajedrez, así como a dominar el inicio de las partidas como todo un profesional",
        url: "static-image-cp-2_640x480_.webp",
    },
    {
        id: Math.random(),
        title: "Finales",
        description:
            "Te enseñaremos las mejores técnicas y la teoría más  reciente para que te conviertas en todo un profesional en los finales de ajedrez y puedas dar jaque mate a tus rivales como nadie",
        url: "static-image-cp-3_640x426_.webp",
    },
];
