import { BBDD } from "../types/types";

export const DATA_BASE: BBDD = {
    users: [
        {
            userID: 1,
            username: "marcelo_chess",
            email: "marcelo.chess@example.com",
            password: "password1",
            elo: 1420,
            title: null,
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 80 },
                { courseId: 2, progress: 75 },
                { courseId: 3, progress: 90 },
                { courseId: 4, progress: 60 },
                { courseId: 5, progress: 85 },
                { courseId: 6, progress: 70 },
                { courseId: 7, progress: 95 },
                { courseId: 9, progress: 30 },
                { courseId: 12, progress: 50 },
            ],
        },
        {
            userID: 2,
            username: "anna_wgm",
            email: "anna.wgm@example.com",
            password: "password2",
            elo: 1580,
            title: null,
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 11, progress: 65 },
                { courseId: 2, progress: 70 },
                { courseId: 3, progress: 50 },
                { courseId: 4, progress: 40 },
                { courseId: 5, progress: 60 },
                { courseId: 6, progress: 55 },
                { courseId: 7, progress: 75 },
                { courseId: 10, progress: 25 },
            ],
        },
        {
            userID: 3,
            username: "vlad_master",
            email: "vlad.master@example.com",
            password: "password3",
            elo: 2010,
            title: "GM",
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 100 },
                { courseId: 2, progress: 100 },
                { courseId: 3, progress: 100 },
                { courseId: 4, progress: 100 },
                { courseId: 5, progress: 100 },
                { courseId: 6, progress: 100 },
                { courseId: 7, progress: 100 },
                { courseId: 8, progress: 95 },
                { courseId: 11, progress: 90 },
                { courseId: 14, progress: 85 },
            ],
        },
        {
            userID: 4,
            username: "lucia_im",
            email: "lucia.im@example.com",
            password: "password4",
            elo: 1940,
            title: "IM",
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 90 },
                { courseId: 2, progress: 80 },
                { courseId: 3, progress: 85 },
                { courseId: 4, progress: 70 },
                { courseId: 5, progress: 75 },
                { courseId: 6, progress: 65 },
                { courseId: 7, progress: 60 },
                { courseId: 13, progress: 50 },
            ],
        },
        {
            userID: 5,
            username: "sami_wfm",
            email: "sami.wfm@example.com",
            password: "password5",
            elo: 1490,
            title: null,
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 60 },
                { courseId: 2, progress: 40 },
                { courseId: 3, progress: 55 },
                { courseId: 4, progress: 50 },
                { courseId: 5, progress: 45 },
                { courseId: 6, progress: 70 },
                { courseId: 7, progress: 80 },
                { courseId: 8, progress: 35 },
            ],
        },
        {
            userID: 6,
            username: "leo_cm",
            email: "leo.cm@example.com",
            password: "password6",
            elo: 1360,
            title: null,
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 40 },
                { courseId: 2, progress: 60 },
                { courseId: 3, progress: 30 },
                { courseId: 4, progress: 35 },
                { courseId: 5, progress: 55 },
                { courseId: 6, progress: 50 },
                { courseId: 7, progress: 45 },
                { courseId: 15, progress: 20 },
            ],
        },
        {
            userID: 7,
            username: "elena_wim",
            email: "elena.wim@example.com",
            password: "password7",
            elo: 2140,
            title: "WIM",
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 55 },
                { courseId: 2, progress: 70 },
                { courseId: 3, progress: 50 },
                { courseId: 4, progress: 45 },
                { courseId: 5, progress: 65 },
                { courseId: 6, progress: 60 },
                { courseId: 7, progress: 75 },
                { courseId: 14, progress: 30 },
            ],
        },
        {
            userID: 8,
            username: "amir_fm",
            email: "amir.fm@example.com",
            password: "password8",
            elo: 2321,
            title: "FM",
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 75 },
                { courseId: 2, progress: 80 },
                { courseId: 3, progress: 85 },
                { courseId: 4, progress: 70 },
                { courseId: 5, progress: 65 },
                { courseId: 6, progress: 90 },
                { courseId: 7, progress: 95 },
            ],
        },
        {
            userID: 9,
            username: "sofia_wcm",
            email: "sofia.wcm@example.com",
            password: "password9",
            elo: 1250,
            title: null,
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 50 },
                { courseId: 2, progress: 60 },
                { courseId: 3, progress: 45 },
                { courseId: 4, progress: 40 },
                { courseId: 5, progress: 55 },
                { courseId: 6, progress: 35 },
                { courseId: 7, progress: 70 },
            ],
        },
        {
            userID: 10,
            username: "tomas_im",
            email: "tomas.im@example.com",
            password: "password10",
            elo: 1930,
            title: "IM",
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 85 },
                { courseId: 2, progress: 90 },
                { courseId: 3, progress: 80 },
                { courseId: 4, progress: 75 },
                { courseId: 5, progress: 70 },
                { courseId: 6, progress: 95 },
                { courseId: 7, progress: 100 },
                { courseId: 8, progress: 65 },
                { courseId: 15, progress: 60 },
            ],
        },
        {
            userID: 11,
            username: "nadia_wim",
            email: "nadia.wim@example.com",
            password: "password11",
            elo: 1440,
            title: null,
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 50 },
                { courseId: 2, progress: 55 },
                { courseId: 3, progress: 60 },
                { courseId: 4, progress: 45 },
                { courseId: 5, progress: 65 },
                { courseId: 6, progress: 70 },
                { courseId: 7, progress: 75 },
            ],
        },
        {
            userID: 12,
            username: "dario_cm",
            email: "dario.cm@example.com",
            password: "password12",
            elo: 2395,
            title: "CM",
            isFirstLogin: false,
            defaultCourses: [
                {
                    courseId: 1,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 2,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },

                {
                    courseId: 3,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 4,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 5,
                    progress: 50,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: false,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: false,
                        },
                    ],
                },
                {
                    courseId: 6,
                    progress: 100,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                        },
                        {
                            themeID: 2,
                            completed: true,
                        },
                        {
                            themeID: 3,
                            completed: true,
                        },
                        {
                            themeID: 4,
                            completed: true,
                        },
                    ],
                },
            ],
            courses: [
                { courseId: 1, progress: 60 },
                { courseId: 2, progress: 45 },
                { courseId: 3, progress: 55 },
                { courseId: 4, progress: 50 },
                { courseId: 5, progress: 65 },
                { courseId: 6, progress: 70 },
                { courseId: 7, progress: 80 },
                { courseId: 13, progress: 40 },
            ],
        },
    ],
    defaultCourses: [
        {
            curseID: 1,
            imageUrl: {
                general: "default-course-peones_500x500_.png",
                thumb: "default-course-peones_500x500_.png",
                full: "default-course-peones_500x500_.png",
            },
            title: "Peones",
            level: "Principiante",
            content: {
                detailDescription:
                    "Los peones son la base de toda estrategia en el ajedrez. Aunque parezcan simples, su correcto uso puede decidir una partida. Este curso te enseña lo esencial para dominar esta pieza clave.",
                themes: [
                    {
                        id: 1,
                        images: [
                            "Peones-gif-posicion-1_1719x1719_.webp",
                            "Peones-gif-posicion-2_1719x1719_.webp",
                            "Peones-gif-posicion-3_1719x1719_.webp",
                            "Peones-gif-posicion-4_1719x1719_.webp",
                            "Peones-gif-posicion-5_1719x1719_.webp",
                            "Peones-gif-posicion-6_1719x1719_.webp",
                            "Peones-gif-posicion-7_1719x1719_.webp",
                            "Peones-gif-posicion-8_1719x1719_.webp",
                            "Peones-gif-posicion-9_1719x1719_.webp",
                        ],
                        title: "Posición inicial del peón",
                        description:
                            "Los peones se colocan en la segunda fila (fila 2) para las blancas y en la séptima fila (fila 7) para las negras. Forman la primera línea de defensa y controlan el centro desde el inicio.",
                    },
                    {
                        id: 2,
                        images: [
                            "Peones-gif-movimiento-1_1719x1719_.png",
                            "Peones-gif-movimiento-2_1719x1719_.png",
                            "Peones-gif-movimiento-3_1719x1719_.png",
                            "Peones-gif-movimiento-4_1719x1719_.png",
                            "Peones-gif-movimiento-5_1719x1719_.png",
                            "Peones-gif-movimiento-6_1719x1719_.png",
                        ],
                        title: "Movimiento del peón",
                        description:
                            "Los peones avanzan solo hacia adelante, una casilla por turno, pero pueden avanzar dos casillas en su primer movimiento desde su posición inicial.",
                    },
                    {
                        id: 3,
                        images: [
                            "Peones-gif-captura-1_1719x1719_.png",
                            "Peones-gif-captura-2_1719x1719_.png",
                            "Peones-gif-captura-3_1719x1719_.png",
                            "Peones-gif-captura-4_1719x1719_.png",
                            "Peones-gif-captura-5_1719x1719_.png",
                            "Peones-gif-captura-6_1719x1719_.png",
                            "Peones-gif-captura-7_1719x1719_.png",
                        ],
                        title: "Captura del peón",
                        description:
                            "A diferencia de su movimiento, los peones capturan en diagonal, una casilla hacia adelante. También existe una captura especial llamada 'al paso' que se estudia en niveles más avanzados.",
                    },
                    {
                        id: 4,
                        images: [
                            "Peones-gif-coronacion-1_1719x1719_.png",
                            "Peones-gif-coronacion-2_1719x1719_.png",
                            "Peones-gif-coronacion-3_1719x1719_.png",
                            "Peones-gif-coronacion-4_1719x1719_.png",
                            "Peones-gif-coronacion-5_1719x1719_.png",
                            "Peones-gif-coronacion-6_1719x1719_.png",
                            "Peones-gif-coronacion-7_1719x1719_.png",
                            "Peones-gif-coronacion-8_1719x1719_.png",
                        ],
                        title: "La coronación del peón",
                        description:
                            "Cuando un peón alcanza la última fila (fila 8 para blancas o fila 1 para negras), puede convertirse en dama, torre, alfil o caballo. Generalmente se elige la dama por su poder.",
                    },
                ],
            },
        },
        {
            curseID: 2,
            imageUrl: {
                general: "default-course-knights_500x500_.png",
                thumb: "default-course-knights_500x500_.png",
                full: "default-course-knights_500x500_.png",
            },
            title: "Caballos",
            level: "Principiante",
            content: {
                detailDescription:
                    "El caballo es la única pieza que puede saltar sobre otras y moverse en forma de L. Este curso básico te enseña cómo colocarlos y sacar ventaja con ellos desde el inicio.",
                themes: [
                    {
                        id: 1,
                        images: [
                            "Caballos-gif-posicion-1_1719x1719_.png",
                            "Caballos-gif-posicion-2_1719x1719_.png",
                            "Caballos-gif-posicion-3_1719x1719_.png",
                            "Caballos-gif-posicion-4_1719x1719_.png",
                        ],
                        title: "Posición inicial del caballo",
                        description:
                            "Cada jugador comienza con dos caballos: las blancas los colocan en b1 y g1, y las negras en b8 y g8. Están junto a las torres en las esquinas del tablero.",
                    },
                    {
                        id: 2,
                        images: [
                            "Caballos-gif-movimiento-1_1719x1719_.png",
                            "Caballos-gif-movimiento-2_1719x1719_.png",
                            "Caballos-gif-movimiento-3_1719x1719_.png",
                            "Caballos-gif-movimiento-4_1719x1719_.png",
                            "Caballos-gif-movimiento-5_1719x1719_.png",
                            "Caballos-gif-movimiento-6_1719x1719_.png",
                            "Caballos-gif-movimiento-7_1719x1719_.png",
                            "Caballos-gif-movimiento-8_1719x1719_.png",
                            "Caballos-gif-movimiento-9_1719x1719_.png",
                            "Caballos-gif-movimiento-10_1719x1719_.png",
                            "Caballos-gif-movimiento-11_1719x1719_.png",
                        ],
                        title: "Movimiento del caballo",
                        description:
                            "El caballo se mueve en forma de L: dos casillas en una dirección (horizontal o vertical) y una en dirección perpendicular. Además, puede saltar por encima de otras piezas.",
                    },
                    {
                        id: 3,
                        images: [
                            "Caballos-gif-captura-1_1719x1719_.png",
                            "Caballos-gif-captura-2_1719x1719_.png",
                            "Caballos-gif-captura-3_1719x1719_.png",
                        ],
                        title: "Captura del caballo",
                        description:
                            "El caballo captura en la casilla donde termina su movimiento. Si hay una pieza enemiga en la casilla final de su salto en L, puede capturarla.",
                    },
                    {
                        id: 4,
                        images: [
                            "Caballos-gif-horquilla-1_1719x1719_.png",
                            "Caballos-gif-horquilla-2_1719x1719_.png",
                        ],
                        title: "La horquilla del caballo",
                        description:
                            "Una de las tácticas más poderosas del caballo es la horquilla: atacar dos o más piezas al mismo tiempo. Esta técnica aparece constantemente en partidas reales.",
                    },
                ],
            },
        },
        {
            curseID: 3,
            imageUrl: {
                general: "default-course-alfiles_500x500_.png",
                thumb: "default-course-alfiles_500x500_.png",
                full: "default-course-alfiles_500x500_.png",
            },
            title: "Alfiles",
            level: "Principiante",
            content: {
                detailDescription:
                    "Los alfiles se mueven por diagonales y son muy poderosos en posiciones abiertas. En este curso aprenderás cómo se colocan, mueven, capturan y su importancia en el juego largo.",
                themes: [
                    {
                        id: 1,
                        images: [
                            "Alfiles-gif-posicion-1_1719x1719_.png",
                            "Alfiles-gif-posicion-2_1719x1719_.png",
                            "Alfiles-gif-posicion-3_1719x1719_.png",
                            "Alfiles-gif-posicion-4_1719x1719_.png",
                        ],
                        title: "Posición inicial del alfil",
                        description:
                            "Las blancas colocan sus alfiles en c1 y f1; las negras en c8 y f8. Cada alfil permanece en un color específico durante toda la partida (blanco o negro).",
                    },
                    {
                        id: 2,
                        images: [
                            "Alfiles-gif-movimiento-1_1719x1719_.png",
                            "Alfiles-gif-movimiento-2_1719x1719_.png",
                            "Alfiles-gif-movimiento-3_1719x1719_.png",
                            "Alfiles-gif-movimiento-4_1719x1719_.png",
                        ],
                        title: "Movimiento del alfil",
                        description:
                            "Los alfiles se mueven en diagonal, tantas casillas como estén libres, pero siempre en una sola dirección por turno.",
                    },
                    {
                        id: 3,
                        images: [
                            "Alfiles-gif-captura-1_1719x1719_.png",
                            "Alfiles-gif-captura-2_1719x1719_.png",
                        ],
                        title: "Captura del alfil",
                        description:
                            "El alfil captura de la misma forma en que se mueve: en línea diagonal. Puede eliminar cualquier pieza enemiga que esté en su camino.",
                    },
                    {
                        id: 4,
                        images: [
                            "Alfiles-gif-fortaleza-1_1719x1719_.png",
                            "Alfiles-gif-fortaleza-2_1719x1719_.png",
                            "Alfiles-gif-fortaleza-3_1719x1719_.png",
                            "Alfiles-gif-fortaleza-4_1719x1719_.png",
                        ],
                        title: "Duelos de alfiles",
                        description:
                            "Un concepto importante es que los alfiles en posiciones cerradas pueden perder poder, pero en diagonales abiertas dominan el tablero. Como puedes observar, en posicines cerradas no tienen casi movimientos.",
                    },
                ],
            },
        },
        {
            curseID: 4,
            imageUrl: {
                general: "default-course-torres_500x500_.png",
                thumb: "default-course-torres_500x500_.png",
                full: "default-course-torres_500x500_.png",
            },
            title: "Torres",
            level: "Principiante",
            content: {
                detailDescription:
                    "Las torres son piezas fuertes que controlan filas y columnas. En este curso aprenderás sus movimientos básicos, cómo capturar con ellas y por qué son tan importantes en el final.",
                themes: [
                    {
                        id: 1,
                        images: [
                            "Torres-gif-posicion-1_1719x1719_.png",
                            "Torres-gif-posicion-2_1719x1719_.png",
                            "Torres-gif-posicion-3_1719x1719_.png",
                            "Torres-gif-posicion-4_1719x1719_.png",
                        ],
                        title: "Posición inicial de la torre",
                        description:
                            "Las torres se ubican en las esquinas del tablero. Las blancas en a1 y h1; las negras en a8 y h8. Protegen los bordes y se activan especialmente después del enroque.",
                    },
                    {
                        id: 2,
                        images: [
                            "Torres-gif-movimiento-1_1719x1719_.png",
                            "Torres-gif-movimiento-2_1719x1719_.png",
                            "Torres-gif-movimiento-3_1719x1719_.png",
                            "Torres-gif-movimiento-4_1719x1719_.png",
                            "Torres-gif-movimiento-5_1719x1719_.png",
                        ],
                        title: "Movimiento de la torre",
                        description:
                            "La torre se mueve en línea recta a través de filas (horizontal) y columnas (vertical), tantas casillas como estén disponibles.",
                    },
                    {
                        id: 3,
                        images: [
                            "Torres-gif-captura-1_1719x1719_.png",
                            "Torres-gif-captura-2_1719x1719_.png",
                            "Torres-gif-captura-3_1719x1719_.png",
                        ],
                        title: "Captura de la torre",
                        description:
                            "La torre captura igual que se mueve: puede eliminar cualquier pieza enemiga ubicada en su misma fila o columna si no hay piezas entre medio.",
                    },
                    {
                        id: 4,
                        images: [
                            "Torres-gif-fortaleza-1_1719x1719_.png",
                            "Torres-gif-fortaleza-2_1719x1719_.png",
                            "Torres-gif-fortaleza-3_1719x1719_.png",
                            "Torres-gif-fortaleza-4_1719x1719_.png",
                        ],
                        title: "Activación de las torres",
                        description:
                            "Una torre es más poderosa en columnas abiertas (sin peones). Aprenderás a conectar tus torres y colocarlas en columnas donde tengan máxima actividad.",
                    },
                ],
            },
        },
        {
            curseID: 5,
            imageUrl: {
                general: "default-course-queens_500x500_.png",
                thumb: "default-course-queens_500x500_.png",
                full: "default-course-queens_500x500_.png",
            },
            title: "Reina",
            level: "Principiante",
            content: {
                detailDescription:
                    "La dama es la pieza más poderosa del tablero, combinando el movimiento del alfil y la torre. Aprende cómo usarla sin exponerla demasiado.",
                themes: [
                    {
                        id: 1,
                        images: [
                            "Reina-gif-posicion-1_1719x1719_.png",
                            "Reina-gif-posicion-2_1719x1719_.png",
                        ],
                        title: "Posición inicial de la reina",
                        description:
                            "La reina blanca se coloca en d1 y la reina negra en d8. Siempre empieza en la casilla de su mismo color: blanca en blanca, negra en negra.",
                    },
                    {
                        id: 2,
                        images: [
                            "Reina-gif-movimiento-1_1719x1719_.png",
                            "Reina-gif-movimiento-2_1719x1719_.png",
                            "Reina-gif-movimiento-3_1719x1719_.png",
                            "Reina-gif-movimiento-4_1719x1719_.png",
                            "Reina-gif-movimiento-5_1719x1719_.png",
                            "Reina-gif-movimiento-6_1719x1719_.png",
                            "Reina-gif-movimiento-7_1719x1719_.png",
                            "Reina-gif-movimiento-8_1719x1719_.png",
                            "Reina-gif-movimiento-9_1719x1719_.png",
                        ],
                        title: "Movimiento de la reina",
                        description:
                            "La reina puede moverse en línea recta por filas, columnas y diagonales, combinando el poder de la torre y el alfil en una sola pieza.",
                    },
                    {
                        id: 3,
                        images: [
                            "Reina-gif-captura-1_1719x1719_.png",
                            "Reina-gif-captura-2_1719x1719_.png",
                            "Reina-gif-captura-3_1719x1719_.png",
                        ],
                        title: "Captura de la reina",
                        description:
                            "Captura cualquier pieza enemiga que esté en su camino de movimiento, tanto en línea recta como en diagonal.",
                    },
                    {
                        id: 4,
                        images: [
                            "Reina-gif-warning-1_1719x1719_.png",
                            "Reina-gif-warning-2_1719x1719_.png",
                            "Reina-gif-warning-3_1719x1719_.png",
                        ],
                        title: "Uso responsable de la reina",
                        description:
                            "Aunque poderosa, no conviene sacarla demasiado pronto. Aprende cuándo y cómo usarla correctamente sin exponerla a ataques innecesarios.",
                    },
                ],
            },
        },
        {
            curseID: 6,
            imageUrl: {
                general: "default-course-reyes_500x500_.png",
                thumb: "default-course-reyes_500x500_.png",
                full: "default-course-reyes_500x500_.png",
            },
            title: "Rey",
            level: "Principiante",
            content: {
                detailDescription:
                    "El rey es la pieza más importante: si lo atrapan, se pierde la partida. Aprende sus movimientos básicos, cómo protegerlo y cuándo puede ser activo.",
                themes: [
                    {
                        id: 1,
                        images: [
                            "Rey-gif-posicion-1_1719x1719_.png",
                            "Rey-gif-posicion-2_1719x1719_.png",
                        ],
                        title: "Posición inicial del rey",
                        description:
                            "El rey blanco empieza en e1 y el rey negro en e8. Siempre se coloca entre el alfil de rey y la dama.",
                    },
                    {
                        id: 2,
                        images: [
                            "Rey-gif-movimiento-1_1719x1719_.png",
                            "Rey-gif-movimiento-2_1719x1719_.png",
                            "Rey-gif-movimiento-3_1719x1719_.png",
                            "Rey-gif-movimiento-4_1719x1719_.png",
                            "Rey-gif-movimiento-5_1719x1719_.png",
                            "Rey-gif-movimiento-6_1719x1719_.png",
                            "Rey-gif-movimiento-7_1719x1719_.png",
                            "Rey-gif-movimiento-8_1719x1719_.png",
                            "Rey-gif-movimiento-9_1719x1719_.png",
                            "Rey-gif-movimiento-10_1719x1719_.png",
                            "Rey-gif-movimiento-11_1719x1719_.png",
                        ],
                        title: "Movimiento del rey",
                        description:
                            "El rey se mueve una casilla en cualquier dirección: horizontal, vertical o diagonal. No puede moverse a una casilla amenazada.",
                    },
                    {
                        id: 3,
                        images: [
                            "Rey-gif-captura-1_1719x1719_.png",
                            "Rey-gif-captura-2_1719x1719_.png",
                            "Rey-gif-captura-3_1719x1719_.png",
                            "Rey-gif-captura-4_1719x1719_.png",
                            "Rey-gif-captura-5_1719x1719_.png",
                            "Rey-gif-captura-6_1719x1719_.png",
                            "Rey-gif-captura-7_1719x1719_.png",
                        ],
                        title: "Captura del rey",
                        description:
                            "El rey nunca 'captura' en el sentido ofensivo: se debe mantener a salvo. Sin embargo, puede eliminar piezas enemigas si la casilla no está bajo ataque.",
                    },
                    {
                        id: 4,
                        images: [
                            "Rey-gif-enrroque-1_1719x1719_.png",
                            "Rey-gif-enrroque-2_1719x1719_.png",
                            "Rey-gif-enrroque-3_1719x1719_.png",
                            "Rey-gif-enrroque-4_1719x1719_.png",
                        ],
                        title: "El enroque",
                        description:
                            "El enroque es un movimiento especial en ajedrez donde el rey y una de las torres se mueven al mismo tiempo. Sirve para proteger al rey, llevándolo a una posición más segura, y al mismo tiempo activar la torre. Para enrocar, el rey se mueve dos casillas hacia la torre, y la torre salta al otro lado del rey.",
                    },
                ],
            },
        },
    ],
    courses: [
        {
            curseID: 1,
            createdAt: "2024-02-17",
            imageUrl: {
                general: "course-image-full-1_1920x1280_.jpg",
                thumb: "course-image-thumb-1-_640x427_.jpg",
                full: "course-image-full-1_1920x1280_.jpg",
            },
            sales: 864,
            title: "Introducción al Ajedrez",
            shortDescription:
                "Aprende las reglas básicas y los conceptos fundamentales para empezar a jugar.",
            level: "Principiante",
            price: 9.99,
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
            authors: [1, 2],
        },
        {
            curseID: 2,
            createdAt: "2025-07-17",
            imageUrl: {
                general: "course-image-full-2_1920x1271_.jpg",
                full: "course-image-full-2_1920x1271_.jpg",
                thumb: "course-image-thumb-2_649x424_.jpg",
            },
            sales: 756,
            title: "Aperturas Fundamentales",
            shortDescription:
                "Domina las aperturas básicas que todo jugador debe conocer.",
            level: "Principiante",
            price: 12.5,

            detailDescription:
                "En este curso profundizamos en las aperturas clásicas y sus objetivos estratégicos, para que puedas iniciar tus partidas con confianza y ventaja.",
            content: {
                themes: [
                    {
                        title: "Apertura Española",
                        description: "Control y presión en el centro.",
                    },
                    {
                        title: "Apertura Italiana",
                        description: "Desarrollo rápido y ataques tempranos.",
                    },
                    {
                        title: "Defensa Siciliana",
                        description: "Contraataque y dinámica.",
                    },
                    {
                        title: "Defensa Francesa",
                        description: "Solidez y estructura.",
                    },
                    {
                        title: "Estrategias de apertura",
                        description:
                            "Ideas comunes para consolidar la posición.",
                    },
                ],
                detailDescription: [
                    "Analizaremos en profundidad las aperturas más populares, sus movimientos característicos y la lógica detrás de cada jugada.",
                    "Se explicará cómo elegir la apertura adecuada según tu estilo de juego y cómo adaptarte a las respuestas del rival.",
                    "Cada apertura será desglosada con ejemplos prácticos y partidas históricas que ilustran sus ventajas y posibles riesgos.",
                    "También se enseñarán los principios fundamentales que subyacen en todas las aperturas, como el control del centro, desarrollo rápido y seguridad del rey.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Reconocer aperturas",
                        description:
                            "Identificar las principales líneas de juego.",
                    },
                    {
                        title: "Adaptar estrategia",
                        description:
                            "Modificar planes según la respuesta del rival.",
                    },
                    {
                        title: "Control del centro",
                        description: "Fundamento para una apertura exitosa.",
                    },
                ],
                detailDescription: [
                    "Al completar este curso, podrás identificar y jugar las aperturas básicas con seguridad y coherencia.",
                    "Aprenderás a ajustar tu estrategia según las variantes que el oponente elija, manteniendo siempre el control del centro.",
                    "Desarrollarás un sentido más profundo del valor posicional que las aperturas buscan establecer para lograr ventaja en el medio juego.",
                ],
            },
            authors: [3, 4],
        },
        {
            curseID: 3,
            createdAt: "2024-03-17",
            imageUrl: {
                general: "course-image-full-3_1920x1280_.jpg",
                full: "course-image-full-3_1920x1280_.jpg",
                thumb: "course-image-thumb-3_640x427_.jpg",
            },
            sales: 768,
            title: "Errores Comunes y Cómo Evitarlos",
            shortDescription:
                "Identifica y corrige los errores más frecuentes en partidas de principiantes.",
            level: "Principiante",
            price: 11.99,

            detailDescription:
                "Un curso que analiza los errores más comunes cometidos en las primeras etapas del aprendizaje del ajedrez. Aprenderás cómo evitarlos y convertirlos en oportunidades de mejora.",
            content: {
                themes: [
                    {
                        title: "Mover la misma pieza varias veces",
                        description:
                            "Cómo desperdiciar tiempos y perder la iniciativa.",
                    },
                    {
                        title: "Olvidar el desarrollo",
                        description:
                            "Errores estratégicos al no sacar piezas menores a tiempo.",
                    },
                    {
                        title: "No enrocarse",
                        description: "Por qué la seguridad del rey es crucial.",
                    },
                    {
                        title: "Abrir líneas sin control",
                        description:
                            "Errores de peones que debilitan la posición.",
                    },
                    {
                        title: "Ignorar amenazas del rival",
                        description:
                            "Falta de cálculo o sobreconfianza en posiciones aparentemente seguras.",
                    },
                ],
                detailDescription: [
                    "El contenido del curso gira en torno a los patrones de error más frecuentes observados en jugadores de nivel principiante. Cada módulo presenta situaciones reales de partida donde se ha cometido uno de estos fallos y se analiza el porqué, sus consecuencias y cómo prevenirlos.",
                    "Se explica con profundidad por qué mover la misma pieza varias veces al inicio de la partida ralentiza el desarrollo y concede ventaja al oponente. También se aborda la importancia de sacar todas las piezas menores antes de emprender ataques prematuros.",
                    "La sección sobre el enroque muestra múltiples ejemplos de cómo retrasar o no enrocar puede ser letal, incluso en posiciones igualadas. Igualmente, se analizan aperturas que debilitan innecesariamente la estructura de peones sin compensación alguna.",
                    "Finalmente, se enfoca en mejorar la visión táctica a través del reconocimiento de amenazas del rival. El curso entrena al alumno a analizar con más profundidad cada jugada, evitando blunders simples y favoreciendo una toma de decisiones más sólida.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Desarrollo eficiente",
                        description:
                            "Aplicar principios de apertura con lógica.",
                    },
                    {
                        title: "Pensamiento reactivo",
                        description:
                            "Aprender a detectar amenazas y responder correctamente.",
                    },
                    {
                        title: "Disciplina estructural",
                        description: "Mantener estructuras de peones sólidas.",
                    },
                ],
                detailDescription: [
                    "Este curso te entrenará para pensar de manera lógica y estratégica desde las primeras jugadas. Entenderás por qué el desarrollo correcto de las piezas es vital para tomar la iniciativa en la partida, y cómo pequeñas decisiones afectan el medio juego.",
                    "A través de análisis guiados, mejorarás tu pensamiento reactivo, desarrollando una mejor comprensión del ajedrez como juego de amenazas. Aprenderás a anticiparte a lo que tu rival pretende y cómo prevenir ataques antes de que sucedan.",
                    "También se destaca la importancia de la estructura de peones, mostrando cómo pequeños errores en el inicio pueden derivar en debilidades que persisten toda la partida. Aprenderás a construir posiciones sólidas y cómo castigar a quienes no lo hacen.",
                ],
            },
            authors: [5, 6],
        },

        {
            curseID: 4,
            createdAt: "2024-10-01",
            imageUrl: {
                general: "course-image-full-4_1920x1281_.jpg",
                full: "course-image-full-4_1920x1281_.jpg",
                thumb: "course-image-thumb-4_640x427_.jpg",
            },
            sales: 567,
            title: "Tácticas Intermedias",
            shortDescription:
                "Da el siguiente paso en tu entrenamiento táctico con conceptos más avanzados.",
            level: "Intermedio",
            price: 18.99,

            detailDescription:
                "Para jugadores que ya dominan las tácticas básicas y quieren mejorar su precisión en combinaciones más complejas. Este curso lleva tu visión táctica al siguiente nivel.",
            content: {
                themes: [
                    {
                        title: "Combinaciones múltiples",
                        description: "Secuencias de táctica encadenada.",
                    },
                    {
                        title: "Desviación avanzada",
                        description:
                            "Forzar piezas fuera de su posición crítica.",
                    },
                    {
                        title: "Sacrificios posicionales",
                        description:
                            "Ofrecer material por iniciativa o ataque.",
                    },
                    {
                        title: "Doble amenaza con rayos X",
                        description: "Amenazas ocultas a través de piezas.",
                    },
                    {
                        title: "Transposición táctica",
                        description:
                            "Alterar el orden natural para obtener ventaja.",
                    },
                ],
                detailDescription: [
                    "Este curso aborda conceptos tácticos más avanzados mediante el estudio de combinaciones complejas en situaciones reales. Las lecciones se centran en desarrollar la capacidad de encontrar secuencias tácticas profundas que requieran cálculo y visualización precisa.",
                    "Cada táctica se introduce con teoría y luego se explora a través de ejemplos comentados que muestran cómo surgieron y qué decisiones tomó el jugador. Aprenderás cómo sacrificar una pieza en el momento justo para abrir líneas decisivas o desorganizar la defensa rival.",
                    "A diferencia de los cursos básicos, aquí se enfatiza el cálculo preciso. Aprenderás a anticipar respuestas del oponente y a calcular variantes más allá de tres jugadas. Esto es clave para superar a jugadores del mismo nivel.",
                    "Además, se exploran temas tácticos menos conocidos pero muy eficaces, como la transposición táctica y los ataques con rayos X combinados. Estos conceptos elevan tu juego táctico y te preparan para enfrentar partidas mucho más exigentes.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Cálculo profundo",
                        description: "Visualizar combinaciones con precisión.",
                    },
                    {
                        title: "Sacrificios intuitivos",
                        description:
                            "Confiar en la iniciativa aún sin evaluación concreta.",
                    },
                    {
                        title: "Análisis post-partida",
                        description:
                            "Revisar tácticas fallidas y aprender de ellas.",
                    },
                ],
                detailDescription: [
                    "Este curso te ayudará a mejorar tu capacidad de cálculo mediante ejercicios progresivos que entrenan tu visualización, concentración y memoria de variantes. El objetivo es que seas capaz de calcular 4 o 5 jugadas con confianza.",
                    "También aprenderás cuándo hacer sacrificios sin tener certeza completa, confiando en patrones y conceptos posicionales que respaldan la decisión. Estas habilidades son esenciales en partidas dinámicas y de ataque.",
                    "Finalmente, se promueve la reflexión post-partida como hábito clave para el crecimiento. Aprenderás a detectar qué combinaciones fallaste, por qué lo hiciste, y cómo no volver a cometer los mismos errores tácticos.",
                ],
            },
            authors: [7, 8],
        },

        {
            curseID: 5,
            createdAt: "2024-11-02",
            imageUrl: {
                general: "course-image-full-5_1920x1280_.jpg",
                full: "course-image-full-5_1920x1280_.jpg",
                thumb: "course-image-thumb-5_640x427_.jpg",
            },
            sales: 1987,
            title: "Estrategia Posicional Básica",
            shortDescription:
                "Aprende los principios que rigen el ajedrez más allá de las tácticas inmediatas.",
            level: "Intermedio",
            price: 16.5,

            detailDescription:
                "Curso esencial para aquellos que ya dominan la táctica básica y desean profundizar en los fundamentos estratégicos del ajedrez posicional.",
            content: {
                themes: [
                    {
                        title: "Casillas débiles",
                        description:
                            "Identificar y explotar puntos vulnerables.",
                    },
                    {
                        title: "Mayoría de peones",
                        description: "Cómo utilizarla para generar ventajas.",
                    },
                    {
                        title: "Buenas y malas piezas",
                        description: "Diferenciar piezas activas y pasivas.",
                    },
                    {
                        title: "Control de columnas abiertas",
                        description: "Cómo usar las torres estratégicamente.",
                    },
                    {
                        title: "Planes a largo plazo",
                        description:
                            "Tomar decisiones más allá de la táctica inmediata.",
                    },
                ],
                detailDescription: [
                    "Este curso proporciona las bases de pensamiento posicional necesarias para mejorar tu nivel general de ajedrez. Se explican conceptos esenciales como casillas débiles, estructuras de peones y planes a largo plazo que definen la calidad de una posición.",
                    "A través del análisis de partidas modelo, se enseñan técnicas para explotar debilidades, entender cuándo cambiar piezas y cómo transformar una ventaja pequeña en una ganancia definitiva.",
                    "También se trabajan temas como el uso correcto de la mayoría de peones en un flanco, o cómo convertir una columna abierta en una autopista de ataque para las torres. Estas ideas marcan la diferencia entre un jugador táctico y uno estratégico.",
                    "Cada lección incluye ejemplos prácticos y desafíos que entrenan tu comprensión global de las posiciones, para que puedas construir planes coherentes incluso sin tácticas inmediatas a la vista.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Pensamiento estratégico",
                        description: "Planear en función del tipo de posición.",
                    },
                    {
                        title: "Gestión del material",
                        description:
                            "Cambiar o conservar piezas según su función.",
                    },
                    {
                        title: "Paciencia y maniobras",
                        description: "Aprender a ganar con lentitud y lógica.",
                    },
                ],
                detailDescription: [
                    "Tras finalizar este curso, comprenderás que el ajedrez no es solo cálculo, sino también planificación. Serás capaz de identificar las debilidades estructurales en una posición y construir un plan para explotarlas.",
                    "El curso entrena la gestión eficiente del material: cuándo cambiar, cuándo conservar y cómo valorar la actividad de cada pieza más allá de su valor numérico.",
                    "Además, se trabaja la paciencia como virtud del jugador posicional. Aprenderás a maniobrar tus piezas durante varios turnos con un objetivo claro, generando ventajas sin necesidad de combinaciones tácticas inmediatas.",
                ],
            },
            authors: [9, 10],
        },
        {
            curseID: 6,
            createdAt: "2024-05-14",
            imageUrl: {
                general: "course-image-full-6_1920x1080_.jpg",
                full: "course-image-full-6_1920x1080_.jpg",
                thumb: "course-image-thumb-6_640x360_.jpg",
            },
            sales: 345,
            title: "Finales Básicos",
            shortDescription:
                "Domina los conceptos esenciales para cerrar tus partidas con éxito.",
            level: "Principiante",
            price: 13.5,

            detailDescription:
                "Este curso está diseñado para enseñarte los finales más comunes y cómo jugar con precisión en las etapas decisivas de la partida.",
            content: {
                themes: [
                    {
                        title: "Finales de rey y peón",
                        description: "Técnicas para coronar peones y defender.",
                    },
                    {
                        title: "Finales de torre",
                        description:
                            "Cómo usar la torre para dominar en el final.",
                    },
                    {
                        title: "Finales de alfil y caballo",
                        description:
                            "Ventajas y desventajas en los finales menores.",
                    },
                    {
                        title: "Reglas de oposición",
                        description:
                            "Conceptos clave para el movimiento del rey.",
                    },
                    {
                        title: "Finales teóricos importantes",
                        description: "Estudio de posiciones clásicas.",
                    },
                ],
                detailDescription: [
                    "Este módulo te guía a través de las posiciones finales más frecuentes y cómo resolverlas correctamente para ganar o empatar la partida.",
                    "Aprenderás las técnicas esenciales para mover peones y reyes de manera efectiva, incluyendo la oposición y la zugzwang.",
                    "Se explican las particularidades de los finales con torres, alfiles y caballos, y cómo aprovechar las características de cada pieza en esta fase del juego.",
                    "Además, se estudian finales teóricos clásicos, que todo jugador debe conocer para evitar errores costosos.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Precisión en finales",
                        description: "Tomar decisiones correctas bajo presión.",
                    },
                    {
                        title: "Conservación de material",
                        description: "Cómo mantener la ventaja en el final.",
                    },
                    {
                        title: "Planificación del final",
                        description: "Visualizar y ejecutar planes de cierre.",
                    },
                ],
                detailDescription: [
                    "Al completar este curso, serás capaz de manejar los finales más comunes con seguridad y precisión, evitando errores que suelen costar partidas.",
                    "Desarrollarás la habilidad para conservar ventajas materiales y para planificar movimientos con varios turnos de anticipación.",
                    "El curso te prepara para enfrentar situaciones de presión y tomar decisiones acertadas que te acerquen a la victoria.",
                ],
            },
            authors: [11, 12],
        },
        {
            curseID: 7,
            createdAt: "2025-01-13",
            imageUrl: {
                general: "course-image-full-7_1920x1280_.jpg",
                full: "course-image-full-7_1920x1280_.jpg",
                thumb: "course-image-thumb-7_640x426_.jpg",
            },
            sales: 987,
            title: "Aperturas Avanzadas",
            shortDescription:
                "Expande tu repertorio con aperturas complejas y dinámicas.",
            level: "Avanzado",
            price: 21.0,

            detailDescription:
                "Este curso está pensado para jugadores que buscan dominar aperturas con profundidad estratégica y variantes avanzadas para sorprender a sus rivales.",
            content: {
                themes: [
                    {
                        title: "Defensa Nimzoindia",
                        description: "Control del centro y flexibilidad.",
                    },
                    {
                        title: "Defensa Grünfeld",
                        description:
                            "Contraataque dinámico y control posicional.",
                    },
                    {
                        title: "Apertura Reti",
                        description: "Fianchetto y presión indirecta.",
                    },
                    {
                        title: "Gambito de dama aceptado y rechazado",
                        description: "Opciones y planes estratégicos.",
                    },
                    {
                        title: "Preparación y estudio de líneas",
                        description: "Cómo construir un repertorio sólido.",
                    },
                ],
                detailDescription: [
                    "Se profundiza en aperturas que requieren un conocimiento detallado de variantes y planes a largo plazo, ideales para jugadores que quieren elevar su nivel.",
                    "Cada apertura se analiza en su contexto histórico y estratégico, presentando las ideas principales y las amenazas típicas que surgen.",
                    "El curso enseña a preparar líneas específicas y a adaptar el repertorio personal a diferentes estilos de juego y rivales.",
                    "Se incluyen consejos prácticos para memorizar variantes y cómo interpretar los movimientos para tomar decisiones basadas en la posición, no solo en la teoría.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Análisis profundo",
                        description:
                            "Comprender las ideas detrás de las jugadas.",
                    },
                    {
                        title: "Flexibilidad estratégica",
                        description: "Adaptar planes según el desarrollo.",
                    },
                    {
                        title: "Memorización efectiva",
                        description: "Técnicas para retener variantes.",
                    },
                ],
                detailDescription: [
                    "Con este curso, lograrás analizar posiciones complejas y entender las ideas estratégicas que sustentan cada movimiento.",
                    "Aprenderás a ser flexible en tu juego, adaptándote a las respuestas del rival y modificando planes según el contexto.",
                    "Además, desarrollarás métodos para memorizar aperturas y variantes, facilitando el estudio continuo y la preparación para torneos.",
                ],
            },
            authors: [13, 14],
        },
        {
            curseID: 8,
            createdAt: "2024-08-22",
            imageUrl: {
                general: "course-image-full-8_1920x1280_.jpg",
                full: "course-image-full-8_1920x1280_.jpg",
                thumb: "course-image-thumb-8_640x426_.jpg",
            },
            sales: 465,
            title: "Tácticas Avanzadas",
            shortDescription:
                "Mejora tu capacidad para encontrar combinaciones complejas y decisivas.",
            level: "Avanzado",
            price: 22.5,

            detailDescription:
                "Curso orientado a jugadores que quieren perfeccionar su visión táctica y dominar maniobras que cambian el rumbo de las partidas.",
            content: {
                themes: [
                    {
                        title: "Clavadas y ataques dobles",
                        description: "Identificar oportunidades tácticas.",
                    },
                    {
                        title: "Redirección y desvío",
                        description: "Manipular las piezas rivales.",
                    },
                    {
                        title: "Sacrificios tácticos",
                        description: "Ofrecer material por ventaja inmediata.",
                    },
                    {
                        title: "Ataques descubiertos",
                        description: "Maximizar la presión.",
                    },
                    {
                        title: "Patrones combinatorios",
                        description: "Reconocer patrones recurrentes.",
                    },
                ],
                detailDescription: [
                    "Este curso profundiza en temas tácticos complejos mediante el análisis de combinaciones brillantes y sus fundamentos conceptuales.",
                    "Se enseña a reconocer patrones tácticos avanzados y a calcular variantes con precisión para aprovechar oportunidades en el tablero.",
                    "Los ejercicios incluyen sacrificios y maniobras poco comunes que requieren visión y cálculo profundos.",
                    "El objetivo es que los alumnos puedan aplicar estas tácticas en sus partidas para ganar ventajas decisivas.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Visualización avanzada",
                        description: "Mejorar la capacidad de cálculo.",
                    },
                    {
                        title: "Reconocimiento de patrones",
                        description: "Aprender a identificar señales tácticas.",
                    },
                    {
                        title: "Confianza en sacrificios",
                        description: "Evaluar cuándo y cómo sacrificar.",
                    },
                ],
                detailDescription: [
                    "Mejorarás tu capacidad para visualizar jugadas múltiples y anticipar respuestas del adversario.",
                    "Aprenderás a reconocer patrones tácticos que aparecen frecuentemente en partidas de alto nivel.",
                    "Desarrollarás confianza para realizar sacrificios que aumenten tus chances de ataque o ganancia material.",
                ],
            },
            authors: [15, 16],
        },
        {
            curseID: 9,
            createdAt: "2023-12-29",
            imageUrl: {
                general: "course-image-full-9_1920x1280_.jpg",
                full: "course-image-full-9_1920x1280_.jpg",
                thumb: "course-image-thumb-9_640x426_.jpg",
            },
            sales: 1098,
            title: "Estrategia Posicional Avanzada",
            shortDescription:
                "Perfecciona tu comprensión del juego posicional para controlar la partida.",
            level: "Avanzado",
            price: 20.0,

            detailDescription:
                "Curso destinado a jugadores que buscan profundizar en el ajedrez posicional y entender las sutilezas del control del espacio y la estructura.",
            content: {
                themes: [
                    {
                        title: "Casillas fuertes y débiles",
                        description: "Análisis detallado del terreno.",
                    },
                    {
                        title: "Planes de expansión",
                        description: "Incrementar el espacio y la influencia.",
                    },
                    {
                        title: "Control de columnas y diagonales",
                        description: "Optimización de piezas.",
                    },
                    {
                        title: "Bloqueos y maniobras",
                        description: "Manipulación de la posición rival.",
                    },
                    {
                        title: "Evaluación posicional",
                        description: "Cómo valorar ventajas y desventajas.",
                    },
                ],
                detailDescription: [
                    "Este curso explora los aspectos más profundos de la estrategia posicional, enseñando a evaluar y modificar la estructura y el control del tablero.",
                    "Se analizan casos prácticos para identificar casillas claves y desarrollar planes de expansión efectivos.",
                    "Los alumnos aprenderán a controlar columnas y diagonales estratégicas con sus piezas para maximizar su influencia.",
                    "También se estudian técnicas para bloquear las piezas rivales y maniobrar con el objetivo de mejorar la posición general.",
                    "Finalmente, se enseña cómo evaluar la posición para decidir cuándo cambiar o mantener piezas, y cómo transformar pequeñas ventajas en victorias.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Análisis avanzado",
                        description:
                            "Valorar posiciones complejas con precisión.",
                    },
                    {
                        title: "Planificación a largo plazo",
                        description: "Diseñar planes coherentes y flexibles.",
                    },
                    {
                        title: "Adaptación y maniobras",
                        description:
                            "Modificar planes según evolución de la partida.",
                    },
                ],
                detailDescription: [
                    "Al completar el curso, podrás realizar análisis posicionales profundos y tomar decisiones informadas para controlar el juego.",
                    "Desarrollarás la habilidad para planificar movimientos a largo plazo, ajustando estrategias a medida que cambia la situación en el tablero.",
                    "Aprenderás a adaptar tus maniobras para aprovechar debilidades y mantener la presión sobre el rival en todo momento.",
                ],
            },
            authors: [1],
        },
        {
            curseID: 10,
            createdAt: "2024-12-19",
            imageUrl: {
                general: "course-image-full-10_1920x1280_.jpg",
                full: "course-image-full-10_1920x1280_.jpg",
                thumb: "course-image-thumb-10_640x426_.jpg",
            },
            sales: 765,
            title: "Psicología del Ajedrez",
            shortDescription: "Controla tu mente para dominar el tablero.",
            level: "Intermedio",
            price: 18.0,

            detailDescription:
                "En este curso, exploramos los aspectos mentales y emocionales del ajedrez, enseñándote a mantener la calma y tomar decisiones óptimas bajo presión.",
            content: {
                themes: [
                    {
                        title: "Gestión del estrés",
                        description:
                            "Técnicas para controlar la ansiedad durante la partida.",
                    },
                    {
                        title: "Concentración y foco",
                        description:
                            "Mejorar la atención y evitar distracciones.",
                    },
                    {
                        title: "Manejo de la frustración",
                        description: "Aprender a recuperarse de errores.",
                    },
                    {
                        title: "Psicología del rival",
                        description: "Leer comportamientos y patrones.",
                    },
                    {
                        title: "Preparación mental para torneos",
                        description:
                            "Estrategias para mantener la calma y confianza.",
                    },
                ],
                detailDescription: [
                    "Este módulo ofrece herramientas para manejar el estrés y la ansiedad que surgen durante las partidas, fundamentales para un rendimiento óptimo.",
                    "Aprenderás técnicas para mejorar tu concentración y mantener el foco durante largos períodos de juego.",
                    "Se abordan estrategias para manejar la frustración y el error, transformándolos en oportunidades de aprendizaje.",
                    "También se enseña cómo leer el comportamiento del rival para anticipar sus movimientos y estrategias.",
                    "Finalmente, se preparan métodos para la preparación mental previa y durante los torneos, que ayudan a mantener la confianza y la calma.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Control emocional",
                        description:
                            "Mantener la calma en situaciones difíciles.",
                    },
                    {
                        title: "Mejora del enfoque",
                        description:
                            "Incrementar la concentración y claridad mental.",
                    },
                    {
                        title: "Lectura del adversario",
                        description:
                            "Interpretar señales y patrones psicológicos.",
                    },
                ],
                detailDescription: [
                    "Con este curso, desarrollarás un mayor control emocional que te permitirá tomar decisiones más acertadas en momentos críticos.",
                    "Mejorarás tu capacidad para concentrarte durante toda la partida, evitando distracciones externas e internas.",
                    "Aprenderás a interpretar señales del adversario que te ayudarán a anticipar sus jugadas y ajustar tu estrategia.",
                ],
            },
            authors: [5],
        },
        {
            curseID: 11,
            createdAt: "2024-5-28",
            imageUrl: {
                general: "course-image-full-11_1920x1280_.jpg",
                full: "course-image-full-11_1920x1280_.jpg",
                thumb: "course-image-thumb-11_640x426_.jpg",
            },
            sales: 567,
            title: "Torneos y Competición",
            shortDescription:
                "Prepárate para competir y destacar en torneos de ajedrez.",
            level: "Intermedio",
            price: 19.5,

            detailDescription:
                "Este curso te guía a través de todo lo que necesitas saber para participar con éxito en torneos, desde la preparación hasta la gestión del tiempo y la evaluación post-partida.",
            content: {
                themes: [
                    {
                        title: "Reglas de torneos",
                        description: "Normativas y formatos comunes.",
                    },
                    {
                        title: "Preparación previa",
                        description:
                            "Cómo estudiar y mentalizarse para competir.",
                    },
                    {
                        title: "Gestión del tiempo",
                        description:
                            "Uso efectivo del reloj en partidas rápidas y clásicas.",
                    },
                    {
                        title: "Análisis post-partida",
                        description: "Aprender de tus errores y aciertos.",
                    },
                    {
                        title: "Estrategias psicológicas",
                        description:
                            "Mantener la calma y controlar el nerviosismo.",
                    },
                ],
                detailDescription: [
                    "En este módulo conocerás las reglas específicas de los diferentes formatos de torneo, lo que te permitirá evitar errores formales y aprovechar las oportunidades.",
                    "Aprenderás técnicas para una preparación efectiva que abarque tanto el estudio del ajedrez como la preparación mental y física.",
                    "Se abordan métodos para administrar correctamente el tiempo de juego, evitando apuros y errores derivados de la presión.",
                    "También se enseña cómo analizar tus partidas para identificar áreas de mejora y consolidar fortalezas.",
                    "Finalmente, se incluyen estrategias para controlar el nerviosismo y mantener la concentración durante la competición.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Disciplina en torneos",
                        description: "Conocer y respetar las reglas.",
                    },
                    {
                        title: "Preparación integral",
                        description: "Combinar estudio, mente y cuerpo.",
                    },
                    {
                        title: "Autocrítica constructiva",
                        description: "Usar el análisis para mejorar.",
                    },
                ],
                detailDescription: [
                    "Con este curso, estarás listo para afrontar cualquier torneo con la confianza y preparación necesarias para rendir al máximo.",
                    "Aprenderás a organizar tu estudio y preparación física y mental para estar en óptimas condiciones.",
                    "Desarrollarás la habilidad de evaluar tus partidas de forma objetiva para crecer constantemente como jugador.",
                ],
            },
            authors: [3, 6],
        },
        {
            curseID: 12,
            createdAt: "2024-10-10",
            imageUrl: {
                general: "course-image-full-12_1920x1280_.jpg",
                full: "course-image-full-12_1920x1280_.jpg",
                thumb: "course-image-thumb-12_640x426_.jpg",
            },
            sales: 276,
            title: "Ataques y Defensa",
            shortDescription:
                "Domina técnicas para atacar y defender eficazmente en cualquier posición.",
            level: "Intermedio",
            price: 20.0,
            detailDescription:
                "Este curso te ayudará a mejorar tu capacidad para lanzar ataques potentes y defender posiciones difíciles, combinando teoría y práctica para obtener resultados inmediatos.",
            content: {
                themes: [
                    {
                        title: "Ataques directos",
                        description: "Técnicas para penetrar la defensa rival.",
                    },
                    {
                        title: "Defensas activas",
                        description:
                            "Cómo neutralizar amenazas y contraatacar.",
                    },
                    {
                        title: "Sacrificios estratégicos",
                        description: "Cuándo y cómo ofrecer material.",
                    },
                    {
                        title: "Contraataques tácticos",
                        description: "Transformar la defensa en ataque.",
                    },
                    {
                        title: "Evaluación dinámica",
                        description:
                            "Reconocer momentos para atacar o defender.",
                    },
                ],
                detailDescription: [
                    "El curso comienza con fundamentos para realizar ataques directos que desestabilicen al oponente y creen oportunidades decisivas.",
                    "Se estudian técnicas de defensa activa que no solo protegen, sino que permiten contraatacar y tomar la iniciativa.",
                    "Aprenderás cuándo y cómo realizar sacrificios estratégicos para obtener ventajas posicionales o materiales.",
                    "Se profundiza en la importancia del contraataque táctico para transformar situaciones defensivas en oportunidades de victoria.",
                    "Finalmente, se enseñan métodos para evaluar dinámicamente la posición y decidir el momento ideal para atacar o defender.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Timing perfecto",
                        description:
                            "Reconocer el momento ideal para acciones tácticas.",
                    },
                    {
                        title: "Equilibrio entre ataque y defensa",
                        description: "Mantener el control en la partida.",
                    },
                    {
                        title: "Sacrificios calculados",
                        description: "Maximizar el impacto de tus movimientos.",
                    },
                ],
                detailDescription: [
                    "Este curso te permitirá encontrar el balance entre ser agresivo y prudente, maximizando tus oportunidades de victoria.",
                    "Desarrollarás un sentido agudo para identificar el momento adecuado para lanzar ataques o reforzar la defensa.",
                    "Además, adquirirás la confianza para realizar sacrificios que te proporcionen ventajas duraderas en la partida.",
                ],
            },
            authors: [8],
        },
        {
            curseID: 13,
            createdAt: "2025-01-15",
            imageUrl: {
                general: "course-image-full-13_1920x1280_.jpg",
                full: "course-image-full-13_1920x1280_.jpg",
                thumb: "course-image-thumb-13_640x426_.jpg",
            },
            sales: 876,
            title: "Jaque Mate en 1 y 2 Movimientos",
            shortDescription:
                "Ejercita y perfecciona mates rápidos para cerrar partidas con estilo.",
            level: "Principiante",
            price: 10.0,

            detailDescription:
                "En este curso descubrirás patrones de mates rápidos para sorprender a tu adversario desde las primeras jugadas y cerrar la partida eficazmente.",
            content: {
                themes: [
                    {
                        title: "Patrones básicos de jaque mate",
                        description: "Formas comunes de dar mate.",
                    },
                    {
                        title: "Jaque mate en 1 movimiento",
                        description: "Ejercicios y ejemplos prácticos.",
                    },
                    {
                        title: "Jaque mate en 2 movimientos",
                        description: "Combinaciones y trucos.",
                    },
                    {
                        title: "Errores que facilitan mate rápido",
                        description: "Cómo evitarlos.",
                    },
                    {
                        title: "Práctica con problemas tácticos",
                        description: "Ejercicios para reforzar habilidades.",
                    },
                ],
                detailDescription: [
                    "Se analizan y explican los patrones más comunes para dar jaque mate en 1 y 2 movimientos, incluyendo ejemplos visuales y explicativos.",
                    "El curso ofrece ejercicios prácticos para que los alumnos puedan entrenar y memorizar estos mates rápidos.",
                    "Se identifican errores típicos que facilitan a los rivales dar jaque mate y cómo evitarlos para proteger tu rey.",
                    "Además, se incluyen problemas tácticos que refuerzan la comprensión y aplicación de estos conceptos.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Reconocimiento de patrones",
                        description: "Detectar mates rápidos en el tablero.",
                    },
                    {
                        title: "Velocidad y precisión",
                        description: "Ejecutar mates sin errores.",
                    },
                ],
                detailDescription: [
                    "Al finalizar, tendrás la capacidad de identificar rápidamente oportunidades para dar jaque mate en 1 o 2 movimientos.",
                    "Mejorarás tu velocidad y precisión para cerrar partidas con movimientos contundentes y efectivos.",
                ],
            },
            authors: [10, 1],
        },
        {
            curseID: 14,
            createdAt: "2024-05-11",
            imageUrl: {
                general: "course-image-full-14_1920x1440_.jpg",
                full: "course-image-full-14_1920x1440_.jpg",
                thumb: "course-image-thumb-14_640x480_.jpg",
            },
            sales: 987,
            title: "Estrategias para el Medio Juego",
            shortDescription:
                "Aprende a manejar el medio juego con tácticas y planes efectivos.",
            level: "Intermedio",
            price: 18.5,

            detailDescription:
                "Este curso cubre los fundamentos del medio juego, enfocándose en la toma de decisiones, planificación estratégica y ejecución de tácticas para dominar esta fase vital.",
            content: {
                themes: [
                    {
                        title: "Evaluación de la posición",
                        description: "Cómo analizar la estructura y piezas.",
                    },
                    {
                        title: "Planes comunes",
                        description:
                            "Desarrollo de estrategias según la posición.",
                    },
                    {
                        title: "Tácticas para el medio juego",
                        description: "Identificación y aplicación.",
                    },
                    {
                        title: "Intercambios y transformaciones",
                        description: "Decidir qué piezas cambiar.",
                    },
                    {
                        title: "Errores frecuentes",
                        description: "Evitar fallos típicos en esta fase.",
                    },
                ],
                detailDescription: [
                    "Se enseñan métodos para evaluar correctamente la posición del tablero, considerando factores como estructura de peones y actividad de piezas.",
                    "El curso desarrolla planes estratégicos adaptados a diferentes tipos de posiciones y estilos de juego.",
                    "Se profundiza en la identificación y uso efectivo de tácticas específicas del medio juego, que pueden cambiar el curso de la partida.",
                    "También se aborda la importancia de decidir qué piezas intercambiar y cuándo para mejorar la posición general.",
                    "Finalmente, se analizan errores comunes que pueden costar ventaja o incluso la partida, para que los evites eficazmente.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Toma de decisiones",
                        description: "Mejorar la elección de jugadas.",
                    },
                    {
                        title: "Planificación estratégica",
                        description: "Diseñar y ejecutar planes coherentes.",
                    },
                    {
                        title: "Precisión táctica",
                        description: "Aplicar tácticas con efectividad.",
                    },
                ],
                detailDescription: [
                    "Con este curso, mejorarás tu capacidad para decidir la mejor jugada en cada situación del medio juego.",
                    "Aprenderás a planificar de forma estratégica, adaptando tus planes según la evolución de la partida.",
                    "Desarrollarás una mayor precisión en la aplicación de tácticas para aprovechar oportunidades y evitar amenazas.",
                ],
            },
            authors: [3],
        },
        {
            curseID: 15,
            createdAt: "2025-04-06",
            imageUrl: {
                general: "course-image-full-15_1920x1280_.jpg",
                full: "course-image-full-15_1920x1280_.jpg",
                thumb: "course-image-thumb-15_640x426_.jpg",
            },
            sales: 1045,
            title: "Entrenamiento de Cálculo",
            shortDescription:
                "Ejercita tu mente para calcular variantes y mejorar tu juego.",
            level: "Intermedio",
            price: 17.5,

            detailDescription:
                "Este curso está diseñado para mejorar tu capacidad de cálculo y análisis, clave para prever jugadas y planificar estrategias complejas.",
            content: {
                themes: [
                    {
                        title: "Técnicas de cálculo",
                        description: "Métodos para analizar variantes.",
                    },
                    {
                        title: "Visualización de movimientos",
                        description: "Entrenamiento para ver jugadas futuras.",
                    },
                    {
                        title: "Evaluación de posiciones",
                        description: "Decidir el mejor camino a seguir.",
                    },
                    {
                        title: "Ejercicios prácticos",
                        description:
                            "Problemas para fortalecer la capacidad de cálculo.",
                    },
                    {
                        title: "Control del error",
                        description: "Reducir errores durante el análisis.",
                    },
                ],
                detailDescription: [
                    "Se enseñan técnicas para calcular variantes de forma estructurada y eficiente, evitando omisiones y errores.",
                    "El curso incluye ejercicios para mejorar la visualización mental de jugadas y posiciones futuras.",
                    "Aprenderás a evaluar posiciones para decidir cuál es la mejor jugada en cada escenario.",
                    "Los ejercicios prácticos están diseñados para fortalecer tu capacidad analítica y la precisión en el cálculo.",
                    "Finalmente, se abordan métodos para minimizar errores durante el análisis y mejorar la confianza en tus decisiones.",
                ],
            },
            toLearn: {
                themes: [
                    {
                        title: "Cálculo eficiente",
                        description: "Mejorar la velocidad y precisión.",
                    },
                    {
                        title: "Visualización mental",
                        description:
                            "Fortalecer la capacidad de imaginar jugadas.",
                    },
                    {
                        title: "Reducción de errores",
                        description:
                            "Evitar fallos comunes durante el análisis.",
                    },
                ],
                detailDescription: [
                    "Al terminar el curso, podrás calcular variantes con mayor rapidez y seguridad, mejorando notablemente tu rendimiento en partidas.",
                    "Desarrollarás una visualización mental más clara, anticipando jugadas y respuestas con eficacia.",
                    "Reducirás errores habituales durante el análisis, aumentando la confianza en tus decisiones sobre el tablero.",
                ],
            },
            authors: [4],
        },
    ],
    comments: [
        {
            id: 1,
            idUser: 3,
            idCourse: 1,
            text: "Un curso bastante bueno, fácil de seguir y con buena organización.",
            createdAt: "10-05-2025",
        },
        {
            id: 2,
            idUser: 7,
            idCourse: 1,
            text: "Me pareció muy útil en general, lo recomiendo para cualquier jugador.",
            createdAt: "10-03-2025",
        },
        {
            id: 3,
            idUser: 5,
            idCourse: 2,
            text: "Muy buen curso, cumplió con mis expectativas.",
            createdAt: "01-04-2025",
        },
        {
            id: 4,
            idUser: 2,
            idCourse: 2,
            text: "En general fue un curso interesante y bien planteado.",
            createdAt: "24-07-2025",
        },
        {
            id: 5,
            idUser: 8,
            idCourse: 2,
            text: "Me pareció excelente, ideal para seguir aprendiendo.",
            createdAt: "24-03-2025",
        },
        {
            id: 6,
            idUser: 1,
            idCourse: 3,
            text: "Muy recomendable, me gustó la forma en que está estructurado.",
            createdAt: "24-01-2025",
        },
        {
            id: 7,
            idUser: 4,
            idCourse: 3,
            text: "Un curso aceptable, aunque podría mejorar en algunos aspectos generales.",
            createdAt: "24-06-2025",
        },
        {
            id: 8,
            idUser: 6,
            idCourse: 4,
            text: "Está bastante bien, lo disfruté mucho.",
            createdAt: "24-06-2025",
        },
        {
            id: 9,
            idUser: 9,
            idCourse: 5,
            text: "Fue un buen curso, muy claro en su propósito.",
            createdAt: "24-04-2025",
        },
        {
            id: 10,
            idUser: 12,
            idCourse: 6,
            text: "Buena calidad general, se nota el esfuerzo detrás.",
            createdAt: "24-06-2025",
        },
        {
            id: 11,
            idUser: 10,
            idCourse: 6,
            text: "Me gustó bastante, cumplió lo que promete.",
            createdAt: "14-06-2025",
        },
        {
            id: 12,
            idUser: 11,
            idCourse: 7,
            text: "Está bien logrado, muy útil para quienes buscan mejorar.",
            createdAt: "04-02-2025",
        },
        {
            id: 13,
            idUser: 3,
            idCourse: 7,
            text: "Bastante completo, lo recomiendo sin duda.",
            createdAt: "24-06-2025",
        },
        {
            id: 14,
            idUser: 2,
            idCourse: 8,
            text: "Un curso sólido, cumple con su objetivo.",
            createdAt: "18-06-2025",
        },
        {
            id: 15,
            idUser: 4,
            idCourse: 8,
            text: "Fue una buena experiencia en términos generales.",
            createdAt: "23-001-2025",
        },
        {
            id: 16,
            idUser: 6,
            idCourse: 9,
            text: "Buena elección si buscas seguir aprendiendo.",
            createdAt: "24-05-2025",
        },
        {
            id: 17,
            idUser: 8,
            idCourse: 10,
            text: "Muy recomendable, bien explicado y útil.",
            createdAt: "12-06-2025",
        },
        {
            id: 18,
            idUser: 9,
            idCourse: 11,
            text: "No me convenció del todo, creo que podría ser más claro.",
            createdAt: "17-07-2025",
        },
        {
            id: 19,
            idUser: 1,
            idCourse: 12,
            text: "Un curso muy completo, ideal para cualquier nivel.",
            createdAt: "12-02-2025",
        },
        {
            id: 20,
            idUser: 7,
            idCourse: 12,
            text: "Fue una buena experiencia de aprendizaje.",
            createdAt: "16-06-2025",
        },
        {
            id: 21,
            idUser: 10,
            idCourse: 13,
            text: "Muy buen curso, bien presentado.",
            createdAt: "16-02-2025",
        },
        {
            id: 22,
            idUser: 11,
            idCourse: 14,
            text: "Un curso decente, aunque algo básico para mi gusto.",
            createdAt: "16-05-2025",
        },
        {
            id: 23,
            idUser: 5,
            idCourse: 15,
            text: "Curso recomendable para quienes están empezando.",
            createdAt: "10-06-2025",
        },
        {
            id: 24,
            idUser: 12,
            idCourse: 15,
            text: "Buena experiencia en general, volvería a tomar otro similar.",
            createdAt: "11-06-2025",
        },
        {
            id: 25,
            idUser: 6,
            idCourse: 15,
            text: "Muy bueno, cumple con lo que promete.",
            createdAt: "16-01-2025",
        },
    ],
    opinions: [
        {
            id: 1,
            idUser: 1,
            text: "La plataforma es muy intuitiva y fácil de usar.",
        },
        {
            id: 2,
            idUser: 3,
            text: "Excelente contenido y seguimiento de progreso.",
        },
        {
            id: 3,
            idUser: 5,
            text: "Me encanta la variedad de cursos disponibles.",
        },
        {
            id: 4,
            idUser: 8,
            text: "Una excelente plataforma para aprender y mejorar tu ajedrez.",
        },
        {
            id: 5,
            idUser: 11,
            text: "La sección de análisis post-partida es brillante.",
        },
        {
            id: 6,
            idUser: 6,
            text: "Muy buena para jugadores intermedios.",
        },
        {
            id: 7,
            idUser: 2,
            text: "Sería bueno añadir contenido en otros idiomas.",
        },
        {
            id: 8,
            idUser: 9,
            text: "Los cursos están bien explicados y son útiles.",
        },
        { id: 9, idUser: 12, text: "Excelente relación calidad-precio." },
        { id: 10, idUser: 7, text: "Fácil de navegar desde el móvil." },
    ],
    authors: [
        {
            id: 1,
            name: "Laura Vega",
            description:
                "Gran Maestra con amplia experiencia en preparación de aperturas.",
            level: "GM",
            elo: 2550,
            image: "authors-1_640x640_.jpg",
        },
        {
            id: 2,
            name: "Carlos Méndez",
            description: "Experto en finales y entrenador reconocido.",
            level: "IM",
            elo: 2400,
            image: "authors-2_640x640_.jpg",
        },
        {
            id: 3,
            name: "Pablo Torres",
            description:
                "Gran Maestro con enfoque posicional. Entrenador de selecciones juveniles.",
            level: "GM",
            elo: 2560,
            image: "authors-3_640x640_.jpg",
        },
        {
            id: 4,
            name: "Álvaro Rico",
            description:
                "Colaborador y especialista en resolución de estudios tácticos.",
            level: "FM",
            elo: 2322,
            image: "authors-4_640x697_.jpg",
        },
        {
            id: 5,
            name: "Jorge Martínez",
            description:
                "Entrenador con amplia experiencia en enseñanza a principiantes.",
            level: "CM",
            elo: 2200,
            image: "authors-5_640x640_.jpg",
        },
        {
            id: 6,
            name: "Ana López",
            description:
                "Especialista en aperturas y jugadora activa en torneos nacionales.",
            level: "FM",
            elo: 2350,
            image: "authors-6_640x640_.jpg",
        },
        {
            id: 7,
            name: "Daniel Ruiz",
            description:
                "Jugador fuerte especializado en análisis de partidas de principiantes.",
            level: "FM",
            elo: 2305,
            image: "authors-7_640x640_.jpg",
        },
        {
            id: 8,
            name: "Andrés Martínez",
            description:
                "Gran Maestro y entrenador especializado en cálculo táctico.",
            level: "GM",
            elo: 2650,
            image: "authors-8_640x640_.jpg",
        },
        {
            id: 9,
            name: "Lucía Fernández",
            description:
                "Autora de varios libros de táctica y entrenadora de nivel nacional.",
            level: "IM",
            elo: 2420,
            image: "authors-9_640x603_.jpg",
        },
        {
            id: 10,
            name: "Rafael Ortega",
            description:
                "Especialista en tácticas con múltiples títulos internacionales.",
            level: "GM",
            elo: 2600,
            image: "authors-10_640x640_.jpg",
        },
        {
            id: 11,
            name: "Sofía Pérez",
            description:
                "Maestra Internacional experta en estrategia y planificación.",
            level: "IM",
            elo: 2450,
            image: "authors-11_640x425_.jpg",
        },
        {
            id: 12,
            name: "Laura Sánchez",
            description:
                "Psicóloga deportiva y Maestra Internacional femenina.",
            level: "WIM",
            elo: 2300,
            image: "authors-12_640x637_.jpg",
        },
        {
            id: 13,
            name: "Diego Torres",
            description:
                "Jugador y entrenador con amplia experiencia en torneos internacionales.",
            level: "FM",
            elo: 2370,
            image: "authors-13_640x640_.jpg",
        },
        {
            id: 14,
            name: "Patricia Ruiz",
            description:
                "Entrenadora y jugadora con especialización en estrategia dinámica.",
            level: "IM",
            elo: 2420,
            image: "authors-14_640x670_.jpg",
        },
        {
            id: 15,
            name: "Juan Ramírez",
            description: "Coach especializado en enseñanza para principiantes.",
            level: "CM",
            elo: 2150,
            image: "authors-15_640x640_.jpg",
        },
        {
            id: 16,
            name: "Marcos Díaz",
            description:
                "Jugador y entrenador con experiencia en entrenamiento de medio juego.",
            level: "IM",
            elo: 2430,
            image: "authors-16_640x640_.jpg",
        },
    ],
};
