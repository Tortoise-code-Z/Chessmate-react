import { Course } from "../../types/types";
import CoursesColumnDisplay from "../CoursesColumnDisplay";

type Props = {};

function BestSellersSection({}: Props) {
    const courses: Course[] = [
        {
            curseID: 1,
            title: "Introducción al Ajedrez",
            shortDescription:
                "Aprende las reglas básicas y los conceptos fundamentales para empezar a jugar.",
            level: "beginner",
            price: 9.99,
            imageUrl: {
                general: "course-image-thumb-6_640x360_.jpg",
                thumb: "course-image-thumb-6_640x360_.jpg",
            },
            detailDescription:
                "Este curso ofrece una introducción completa para quienes desean iniciarse en el ajedrez, cubriendo desde las reglas hasta las estrategias iniciales que forman la base del juego.",
            content: {
                themes: [
                    {
                        title: "Reglas del ajedrez",
                        description:
                            "Conoce el movimiento y captura de cada pieza.",
                    },
                    {
                        title: "Objetivo del juego",
                        description: "Comprende qué significa dar jaque mate.",
                    },
                    {
                        title: "Movimientos especiales",
                        description: "Enroque, captura al paso y promoción.",
                    },
                    {
                        title: "Principios básicos de apertura",
                        description:
                            "Desarrollar piezas y controlar el centro.",
                    },
                    {
                        title: "Errores comunes",
                        description:
                            "Evita los fallos frecuentes de principiantes.",
                    },
                ],
                detailDescription: [
                    "En este módulo se explican detalladamente las reglas básicas, desde cómo se mueve cada pieza hasta las normas específicas como el enroque y la captura al paso.",
                    "Se hace énfasis en entender el objetivo principal del juego, que es dar jaque mate al rey enemigo, y las distintas formas en que se puede alcanzar esta meta.",
                    "Los alumnos aprenderán los principios fundamentales para comenzar la partida con buen pie, incluyendo el desarrollo rápido de piezas y la importancia del control del centro del tablero.",
                    "Además, se analizan los errores más comunes que suelen cometer los principiantes para evitarlos y acelerar el progreso en el aprendizaje.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Bases sólidas",
                        description:
                            "Establecer un fundamento robusto para progresar en ajedrez.",
                    },
                    {
                        title: "Tácticas iniciales",
                        description:
                            "Reconocer patrones básicos de ataque y defensa.",
                    },
                    {
                        title: "Pensamiento estratégico",
                        description: "Comenzar a planear jugadas anticipadas.",
                    },
                ],
                detailDescription: [
                    "Este curso te preparará para construir una base sólida que te permita entender el juego y mejorar con rapidez.",
                    "Aprenderás a identificar tácticas básicas que te ayudarán a proteger tus piezas y aprovechar las debilidades del oponente.",
                    "Desarrollarás habilidades de pensamiento estratégico, comenzando a planificar tus movimientos de manera anticipada y a evaluar las consecuencias de tus jugadas.",
                ],
            },
            authors: [
                {
                    name: "CM Jorge Martínez",
                    description:
                        "Entrenador con amplia experiencia en enseñanza a principiantes.",
                    level: "CM",
                    elo: 2200,
                },
            ],
        },
    ];

    return (
        <section>
            <h2>
                Nuestros cursos más<span>vendidos</span>
            </h2>
            <CoursesColumnDisplay action={false} courses={courses} />
        </section>
    );
}

export default BestSellersSection;
