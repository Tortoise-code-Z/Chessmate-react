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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
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
                {
                    courseId: 1,
                    progress: 20,
                    themes: [
                        {
                            themeID: 1,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 2,
                            completed: true,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: true,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 3,
                            completed: false,
                            subthemes: [
                                {
                                    completed: true,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                                {
                                    completed: false,
                                    subthemeID: 3,
                                },
                            ],
                        },
                        {
                            themeID: 4,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                        {
                            themeID: 5,
                            completed: false,
                            subthemes: [
                                {
                                    completed: false,
                                    subthemeID: 1,
                                },
                                {
                                    completed: false,
                                    subthemeID: 2,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            userID: 13,
            username: "admin",
            email: "admin@example.com",
            password: "1234",
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
            courses: [],
        },
    ],
    defaultCourses: [
        {
            courseID: 1,
            imageUrl: {
                general: "default-course-peones_500x500_.webp",
                thumb: "default-course-peones_500x500_.webp",
                full: "default-course-peones_500x500_.webp",
            },
            title: { es: "Peones", en: "Pawns" },
            level: "Principiante",
            content: {
                detailDescription: { es: "Los peones son la base de toda estrategia en el ajedrez. Aunque parezcan simples, su correcto uso puede decidir una partida. Este curso te enseña lo esencial para dominar esta pieza clave.", en: "Pawns are the foundation of every strategy in chess. Although they may seem simple, using them correctly can decide a game. This course teaches you the essentials to master this key piece." },
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
                        title: { es: "Posición inicial", en: "Starting position" },
                        description: { es: "Los peones se colocan en la segunda fila (fila 2) para las blancas y en la séptima fila (fila 7) para las negras. Forman la primera línea de defensa y controlan el centro desde el inicio.", en: "Pawns are placed on the second rank (rank 2) for White and on the seventh rank (rank 7) for Black. They form the first line of defense and control the center from the start." },
                    },
                    {
                        id: 2,
                        images: [
                            "Peones-gif-movimiento-1_1719x1719_.webp",
                            "Peones-gif-movimiento-2_1719x1719_.webp",
                            "Peones-gif-movimiento-3_1719x1719_.webp",
                            "Peones-gif-movimiento-4_1719x1719_.webp",
                            "Peones-gif-movimiento-5_1719x1719_.webp",
                            "Peones-gif-movimiento-6_1719x1719_.webp",
                        ],
                        title: { es: "Movimiento", en: "Movement" },
                        description: { es: "Los peones avanzan solo hacia adelante, una casilla por turno, pero pueden avanzar dos casillas en su primer movimiento desde su posición inicial.", en: "Pawns move only forward, one square per turn, but they can advance two squares on their first move from their starting position." },
                    },
                    {
                        id: 3,
                        images: [
                            "Peones-gif-captura-1_1719x1719_.webp",
                            "Peones-gif-captura-2_1719x1719_.webp",
                            "Peones-gif-captura-3_1719x1719_.webp",
                            "Peones-gif-captura-4_1719x1719_.webp",
                            "Peones-gif-captura-5_1719x1719_.webp",
                            "Peones-gif-captura-6_1719x1719_.webp",
                            "Peones-gif-captura-7_1719x1719_.webp",
                        ],
                        title: { es: "Captura", en: "Capture" },
                        description: { es: "A diferencia de su movimiento, los peones capturan en diagonal, una casilla hacia adelante. También existe una captura especial llamada 'al paso' que se estudia en niveles más avanzados.", en: "Unlike their movement, pawns capture diagonally, one square forward. There is also a special capture called 'en passant' that is studied at more advanced levels." },
                    },
                    {
                        id: 4,
                        images: [
                            "Peones-gif-coronacion-1_1719x1719_.webp",
                            "Peones-gif-coronacion-2_1719x1719_.webp",
                            "Peones-gif-coronacion-3_1719x1719_.webp",
                            "Peones-gif-coronacion-4_1719x1719_.webp",
                            "Peones-gif-coronacion-5_1719x1719_.webp",
                            "Peones-gif-coronacion-6_1719x1719_.webp",
                            "Peones-gif-coronacion-7_1719x1719_.webp",
                            "Peones-gif-coronacion-8_1719x1719_.webp",
                        ],
                        title: { es: "La coronación", en: "Promotion" },
                        description: { es: "Cuando un peón alcanza la última fila (fila 8 para blancas o fila 1 para negras), puede convertirse en dama, torre, alfil o caballo. Generalmente se elige la dama por su poder.", en: "When a pawn reaches the last rank (rank 8 for White or rank 1 for Black), it can become a queen, rook, bishop or knight. The queen is usually chosen for its power." },
                    },
                ],
            },
        },
        {
            courseID: 2,
            imageUrl: {
                general: "default-course-knights_500x500_.webp",
                thumb: "default-course-knights_500x500_.webp",
                full: "default-course-knights_500x500_.webp",
            },
            title: { es: "Caballos", en: "Knights" },
            level: "Principiante",
            content: {
                detailDescription: { es: "El caballo es la única pieza que puede saltar sobre otras y moverse en forma de L. Este curso básico te enseña cómo colocarlos y sacar ventaja con ellos desde el inicio.", en: "The knight is the only piece that can jump over others and moves in an L shape. This basic course teaches you how to place them and gain an advantage with them from the start." },
                themes: [
                    {
                        id: 1,
                        images: [
                            "Caballos-gif-posicion-1_1719x1719_.webp",
                            "Caballos-gif-posicion-2_1719x1719_.webp",
                            "Caballos-gif-posicion-3_1719x1719_.webp",
                            "Caballos-gif-posicion-4_1719x1719_.webp",
                        ],
                        title: { es: "Posición inicial", en: "Starting position" },
                        description: { es: "Cada jugador comienza con dos caballos: las blancas los colocan en b1 y g1, y las negras en b8 y g8. Están junto a las torres en las esquinas del tablero.", en: "Each player starts with two knights: White places them on b1 and g1, and Black on b8 and g8. They stand next to the rooks in the corners of the board." },
                    },
                    {
                        id: 2,
                        images: [
                            "Caballos-gif-movimiento-1_1719x1719_.webp",
                            "Caballos-gif-movimiento-2_1719x1719_.webp",
                            "Caballos-gif-movimiento-3_1719x1719_.webp",
                            "Caballos-gif-movimiento-4_1719x1719_.webp",
                            "Caballos-gif-movimiento-5_1719x1719_.webp",
                            "Caballos-gif-movimiento-6_1719x1719_.webp",
                            "Caballos-gif-movimiento-7_1719x1719_.webp",
                            "Caballos-gif-movimiento-8_1719x1719_.webp",
                            "Caballos-gif-movimiento-9_1719x1719_.webp",
                            "Caballos-gif-movimiento-10_1719x1719_.webp",
                            "Caballos-gif-movimiento-11_1719x1719_.webp",
                        ],
                        title: { es: "Movimiento", en: "Movement" },
                        description: { es: "El caballo se mueve en forma de L: dos casillas en una dirección (horizontal o vertical) y una en dirección perpendicular. Además, puede saltar por encima de otras piezas.", en: "The knight moves in an L shape: two squares in one direction (horizontal or vertical) and one square perpendicular. It can also jump over other pieces." },
                    },
                    {
                        id: 3,
                        images: [
                            "Caballos-gif-captura-1_1719x1719_.webp",
                            "Caballos-gif-captura-2_1719x1719_.webp",
                            "Caballos-gif-captura-3_1719x1719_.webp",
                        ],
                        title: { es: "Captura", en: "Capture" },
                        description: { es: "El caballo captura en la casilla donde termina su movimiento. Si hay una pieza enemiga en la casilla final de su salto en L, puede capturarla.", en: "The knight captures on the square where its move ends. If there is an enemy piece on the final square of its L-shaped jump, it can capture it." },
                    },
                    {
                        id: 4,
                        images: [
                            "Caballos-gif-horquilla-1_1719x1719_.webp",
                            "Caballos-gif-horquilla-2_1719x1719_.webp",
                        ],
                        title: { es: "La horquilla", en: "The fork" },
                        description: { es: "Una de las tácticas más poderosas del caballo es la horquilla: atacar dos o más piezas al mismo tiempo. Esta técnica aparece constantemente en partidas reales.", en: "One of the knight's most powerful tactics is the fork: attacking two or more pieces at the same time. This technique appears constantly in real games." },
                    },
                ],
            },
        },
        {
            courseID: 3,
            imageUrl: {
                general: "default-course-alfiles_500x500_.webp",
                thumb: "default-course-alfiles_500x500_.webp",
                full: "default-course-alfiles_500x500_.webp",
            },
            title: { es: "Alfiles", en: "Bishops" },
            level: "Principiante",
            content: {
                detailDescription: { es: "Los alfiles se mueven por diagonales y son muy poderosos en posiciones abiertas. En este curso aprenderás cómo se colocan, mueven, capturan y su importancia en el juego largo.", en: "Bishops move along diagonals and are very powerful in open positions. In this course you will learn how they are placed, how they move and capture, and their importance in the long game." },
                themes: [
                    {
                        id: 1,
                        images: [
                            "Alfiles-gif-posicion-1_1719x1719_.webp",
                            "Alfiles-gif-posicion-2_1719x1719_.webp",
                            "Alfiles-gif-posicion-3_1719x1719_.webp",
                            "Alfiles-gif-posicion-4_1719x1719_.webp",
                        ],
                        title: { es: "Posición inicial", en: "Starting position" },
                        description: { es: "Las blancas colocan sus alfiles en c1 y f1; las negras en c8 y f8. Cada alfil permanece en un color específico durante toda la partida (blanco o negro).", en: "White places its bishops on c1 and f1; Black on c8 and f8. Each bishop stays on one specific color for the entire game (light or dark)." },
                    },
                    {
                        id: 2,
                        images: [
                            "Alfiles-gif-movimiento-1_1719x1719_.webp",
                            "Alfiles-gif-movimiento-2_1719x1719_.webp",
                            "Alfiles-gif-movimiento-3_1719x1719_.webp",
                            "Alfiles-gif-movimiento-4_1719x1719_.webp",
                        ],
                        title: { es: "Movimiento", en: "Movement" },
                        description: { es: "Los alfiles se mueven en diagonal, tantas casillas como estén libres, pero siempre en una sola dirección por turno.", en: "Bishops move diagonally, as many squares as are free, but always in a single direction per turn." },
                    },
                    {
                        id: 3,
                        images: [
                            "Alfiles-gif-captura-1_1719x1719_.webp",
                            "Alfiles-gif-captura-2_1719x1719_.webp",
                        ],
                        title: { es: "Captura", en: "Capture" },
                        description: { es: "El alfil captura de la misma forma en que se mueve: en línea diagonal. Puede eliminar cualquier pieza enemiga que esté en su camino.", en: "The bishop captures the same way it moves: along a diagonal line. It can remove any enemy piece in its path." },
                    },
                    {
                        id: 4,
                        images: [
                            "Alfiles-gif-fortaleza-1_1719x1719_.webp",
                            "Alfiles-gif-fortaleza-2_1719x1719_.webp",
                            "Alfiles-gif-fortaleza-3_1719x1719_.webp",
                            "Alfiles-gif-fortaleza-4_1719x1719_.webp",
                        ],
                        title: { es: "Duelos de alfiles", en: "Bishop duels" },
                        description: { es: "Un concepto importante es que los alfiles en posiciones cerradas pueden perder poder, pero en diagonales abiertas dominan el tablero. Como puedes observar, en posicines cerradas no tienen casi movimientos.", en: "An important concept is that bishops can lose power in closed positions, but on open diagonals they dominate the board. As you can see, in closed positions they have almost no moves." },
                    },
                ],
            },
        },
        {
            courseID: 4,
            imageUrl: {
                general: "default-course-torres_500x500_.webp",
                thumb: "default-course-torres_500x500_.webp",
                full: "default-course-torres_500x500_.webp",
            },
            title: { es: "Torres", en: "Rooks" },
            level: "Principiante",
            content: {
                detailDescription: { es: "Las torres son piezas fuertes que controlan filas y columnas. En este curso aprenderás sus movimientos básicos, cómo capturar con ellas y por qué son tan importantes en el final.", en: "Rooks are strong pieces that control ranks and files. In this course you will learn their basic moves, how to capture with them, and why they are so important in the endgame." },
                themes: [
                    {
                        id: 1,
                        images: [
                            "Torres-gif-posicion-1_1719x1719_.webp",
                            "Torres-gif-posicion-2_1719x1719_.webp",
                            "Torres-gif-posicion-3_1719x1719_.webp",
                            "Torres-gif-posicion-4_1719x1719_.webp",
                        ],
                        title: { es: "Posición inicial", en: "Starting position" },
                        description: { es: "Las torres se ubican en las esquinas del tablero. Las blancas en a1 y h1; las negras en a8 y h8. Protegen los bordes y se activan especialmente después del enroque.", en: "Rooks are placed in the corners of the board. White on a1 and h1; Black on a8 and h8. They protect the edges and become especially active after castling." },
                    },
                    {
                        id: 2,
                        images: [
                            "Torres-gif-movimiento-1_1719x1719_.webp",
                            "Torres-gif-movimiento-2_1719x1719_.webp",
                            "Torres-gif-movimiento-3_1719x1719_.webp",
                            "Torres-gif-movimiento-4_1719x1719_.webp",
                            "Torres-gif-movimiento-5_1719x1719_.webp",
                        ],
                        title: { es: "Movimiento", en: "Movement" },
                        description: { es: "La torre se mueve en línea recta a través de filas (horizontal) y columnas (vertical), tantas casillas como estén disponibles.", en: "The rook moves in a straight line across ranks (horizontal) and files (vertical), as many squares as are available." },
                    },
                    {
                        id: 3,
                        images: [
                            "Torres-gif-captura-1_1719x1719_.webp",
                            "Torres-gif-captura-2_1719x1719_.webp",
                            "Torres-gif-captura-3_1719x1719_.webp",
                        ],
                        title: { es: "Captura", en: "Capture" },
                        description: { es: "La torre captura igual que se mueve: puede eliminar cualquier pieza enemiga ubicada en su misma fila o columna si no hay piezas entre medio.", en: "The rook captures the same way it moves: it can remove any enemy piece on its rank or file if there are no pieces in between." },
                    },
                    {
                        id: 4,
                        images: [
                            "Torres-gif-fortaleza-1_1719x1719_.webp",
                            "Torres-gif-fortaleza-2_1719x1719_.webp",
                            "Torres-gif-fortaleza-3_1719x1719_.webp",
                            "Torres-gif-fortaleza-4_1719x1719_.webp",
                        ],
                        title: { es: "Activación", en: "Activation" },
                        description: { es: "Una torre es más poderosa en columnas abiertas (sin peones). Aprenderás a conectar tus torres y colocarlas en columnas donde tengan máxima actividad.", en: "A rook is most powerful on open files (without pawns). You will learn to connect your rooks and place them on files where they have maximum activity." },
                    },
                ],
            },
        },
        {
            courseID: 5,
            imageUrl: {
                general: "default-course-queens_500x500_.webp",
                thumb: "default-course-queens_500x500_.webp",
                full: "default-course-queens_500x500_.webp",
            },
            title: { es: "Reina", en: "Queen" },
            level: "Principiante",
            content: {
                detailDescription: { es: "La dama es la pieza más poderosa del tablero, combinando el movimiento del alfil y la torre. Aprende cómo usarla sin exponerla demasiado.", en: "The queen is the most powerful piece on the board, combining the movement of the bishop and the rook. Learn how to use it without exposing it too much." },
                themes: [
                    {
                        id: 1,
                        images: [
                            "Reina-gif-posicion-1_1719x1719_.webp",
                            "Reina-gif-posicion-2_1719x1719_.webp",
                        ],
                        title: { es: "Posición inicial", en: "Starting position" },
                        description: { es: "La reina blanca se coloca en d1 y la reina negra en d8. Siempre empieza en la casilla de su mismo color: blanca en blanca, negra en negra.", en: "The white queen is placed on d1 and the black queen on d8. It always starts on a square of its own color: white on white, black on black." },
                    },
                    {
                        id: 2,
                        images: [
                            "Reina-gif-movimiento-1_1719x1719_.webp",
                            "Reina-gif-movimiento-2_1719x1719_.webp",
                            "Reina-gif-movimiento-3_1719x1719_.webp",
                            "Reina-gif-movimiento-4_1719x1719_.webp",
                            "Reina-gif-movimiento-5_1719x1719_.webp",
                            "Reina-gif-movimiento-6_1719x1719_.webp",
                            "Reina-gif-movimiento-7_1719x1719_.webp",
                            "Reina-gif-movimiento-8_1719x1719_.webp",
                            "Reina-gif-movimiento-9_1719x1719_.webp",
                        ],
                        title: { es: "Movimiento", en: "Movement" },
                        description: { es: "La reina puede moverse en línea recta por filas, columnas y diagonales, combinando el poder de la torre y el alfil en una sola pieza.", en: "The queen can move in a straight line along ranks, files and diagonals, combining the power of the rook and the bishop in a single piece." },
                    },
                    {
                        id: 3,
                        images: [
                            "Reina-gif-captura-1_1719x1719_.webp",
                            "Reina-gif-captura-2_1719x1719_.webp",
                            "Reina-gif-captura-3_1719x1719_.webp",
                        ],
                        title: { es: "Captura", en: "Capture" },
                        description: { es: "Captura cualquier pieza enemiga que esté en su camino de movimiento, tanto en línea recta como en diagonal.", en: "It captures any enemy piece in its path of movement, both in a straight line and diagonally." },
                    },
                    {
                        id: 4,
                        images: [
                            "Reina-gif-warning-1_1719x1719_.webp",
                            "Reina-gif-warning-2_1719x1719_.webp",
                            "Reina-gif-warning-3_1719x1719_.webp",
                        ],
                        title: { es: "Uso temprano", en: "Early use" },
                        description: { es: "Aunque poderosa, no conviene sacarla demasiado pronto. Aprende cuándo y cómo usarla correctamente sin exponerla a ataques innecesarios.", en: "Although powerful, it is not a good idea to bring it out too early. Learn when and how to use it correctly without exposing it to unnecessary attacks." },
                    },
                ],
            },
        },
        {
            courseID: 6,
            imageUrl: {
                general: "default-course-reyes_500x500_.webp",
                thumb: "default-course-reyes_500x500_.webp",
                full: "default-course-reyes_500x500_.webp",
            },
            title: { es: "Rey", en: "King" },
            level: "Principiante",
            content: {
                detailDescription: { es: "El rey es la pieza más importante: si lo atrapan, se pierde la partida. Aprende sus movimientos básicos, cómo protegerlo y cuándo puede ser activo.", en: "The king is the most important piece: if it is trapped, the game is lost. Learn its basic moves, how to protect it, and when it can be active." },
                themes: [
                    {
                        id: 1,
                        images: [
                            "Rey-gif-posicion-1_1719x1719_.webp",
                            "Rey-gif-posicion-2_1719x1719_.webp",
                        ],
                        title: { es: "Posición inicial", en: "Starting position" },
                        description: { es: "El rey blanco empieza en e1 y el rey negro en e8. Siempre se coloca entre el alfil de rey y la dama.", en: "The white king starts on e1 and the black king on e8. It is always placed between the king's bishop and the queen." },
                    },
                    {
                        id: 2,
                        images: [
                            "Rey-gif-movimiento-1_1719x1719_.webp",
                            "Rey-gif-movimiento-2_1719x1719_.webp",
                            "Rey-gif-movimiento-3_1719x1719_.webp",
                            "Rey-gif-movimiento-4_1719x1719_.webp",
                            "Rey-gif-movimiento-5_1719x1719_.webp",
                            "Rey-gif-movimiento-6_1719x1719_.webp",
                            "Rey-gif-movimiento-7_1719x1719_.webp",
                            "Rey-gif-movimiento-8_1719x1719_.webp",
                            "Rey-gif-movimiento-9_1719x1719_.webp",
                            "Rey-gif-movimiento-10_1719x1719_.webp",
                            "Rey-gif-movimiento-11_1719x1719_.webp",
                        ],
                        title: { es: "Movimiento", en: "Movement" },
                        description: { es: "El rey se mueve una casilla en cualquier dirección: horizontal, vertical o diagonal. No puede moverse a una casilla amenazada.", en: "The king moves one square in any direction: horizontal, vertical or diagonal. It cannot move to a threatened square." },
                    },
                    {
                        id: 3,
                        images: [
                            "Rey-gif-captura-1_1719x1719_.webp",
                            "Rey-gif-captura-2_1719x1719_.webp",
                            "Rey-gif-captura-3_1719x1719_.webp",
                            "Rey-gif-captura-4_1719x1719_.webp",
                            "Rey-gif-captura-5_1719x1719_.webp",
                            "Rey-gif-captura-6_1719x1719_.webp",
                            "Rey-gif-captura-7_1719x1719_.webp",
                        ],
                        title: { es: "Captura", en: "Capture" },
                        description: { es: "El rey nunca 'captura' en el sentido ofensivo: se debe mantener a salvo. Sin embargo, puede eliminar piezas enemigas si la casilla no está bajo ataque.", en: "The king never 'captures' in an offensive sense: it must be kept safe. However, it can remove enemy pieces if the square is not under attack." },
                    },
                    {
                        id: 4,
                        images: [
                            "Rey-gif-enrroque-1_1719x1719_.webp",
                            "Rey-gif-enrroque-2_1719x1719_.webp",
                            "Rey-gif-enrroque-3_1719x1719_.webp",
                            "Rey-gif-enrroque-4_1719x1719_.webp",
                        ],
                        title: { es: "El enroque", en: "Castling" },
                        description: { es: "El enroque es un movimiento especial en ajedrez donde el rey y una de las torres se mueven al mismo tiempo. Sirve para proteger al rey, llevándolo a una posición más segura, y al mismo tiempo activar la torre. Para enrocar, el rey se mueve dos casillas hacia la torre, y la torre salta al otro lado del rey.", en: "Castling is a special move in chess where the king and one of the rooks move at the same time. It serves to protect the king, bringing it to a safer position, while also activating the rook. To castle, the king moves two squares toward the rook, and the rook jumps to the other side of the king." },
                    },
                ],
            },
        },
    ],
    courses: [
        {
            courseID: 1,
            createdAt: "2024-02-17",
            imageUrl: {
                general: "course-image-full-1_1920x1280_.webp",
                thumb: "course-image-thumb-1-_640x427_.webp",
                full: "course-image-full-1_1920x1280_.webp",
            },
            sales: 864,
            title: { es: "Introducción al Ajedrez", en: "Introducción al Ajedrez" },
            shortDescription: { es: "Aprende las reglas básicas y los conceptos fundamentales para empezar a jugar.", en: "Aprende las reglas básicas y los conceptos fundamentales para empezar a jugar." },
            level: "Principiante",
            price: 9.99,
            detailDescription: { es: "Este curso ofrece una introducción completa para quienes desean iniciarse en el ajedrez, cubriendo desde las reglas hasta las estrategias iniciales que forman la base del juego.", en: "Este curso ofrece una introducción completa para quienes desean iniciarse en el ajedrez, cubriendo desde las reglas hasta las estrategias iniciales que forman la base del juego." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Reglas del ajedrez", en: "Reglas del ajedrez" },
                        description: { es: "Conoce el movimiento y captura de cada pieza.", en: "Conoce el movimiento y captura de cada pieza." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Movimiento de piezas", en: "Movimiento de piezas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Captura de piezas", en: "Captura de piezas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Objetivo del juego", en: "Objetivo del juego" },
                        description: { es: "Comprende qué significa dar jaque mate.", en: "Comprende qué significa dar jaque mate." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Concepto de jaque", en: "Concepto de jaque" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Definición de jaque mate", en: "Definición de jaque mate" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Movimientos especiales", en: "Movimientos especiales" },
                        description: { es: "Enroque, captura al paso y promoción.", en: "Enroque, captura al paso y promoción." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Enroque", en: "Enroque" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Captura al paso", en: "Captura al paso" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 3,
                                title: { es: "Promoción de peones", en: "Promoción de peones" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Principios básicos de apertura", en: "Principios básicos de apertura" },
                        description: { es: "Desarrollar piezas y controlar el centro.", en: "Desarrollar piezas y controlar el centro." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Desarrollo de piezas", en: "Desarrollo de piezas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Control del centro", en: "Control del centro" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Errores comunes", en: "Errores comunes" },
                        description: { es: "Evita los fallos frecuentes de principiantes.", en: "Evita los fallos frecuentes de principiantes." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Errores de principiantes", en: "Errores de principiantes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Cómo evitarlos", en: "Cómo evitarlos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "En este módulo se explican detalladamente las reglas básicas, desde cómo se mueve cada pieza hasta las normas específicas como el enroque y la captura al paso.",
                    "Se hace énfasis en entender el objetivo principal del juego, que es dar jaque mate al rey enemigo, y las distintas formas en que se puede alcanzar esta meta.",
                    "Los alumnos aprenderán los principios fundamentales para comenzar la partida con buen pie, incluyendo el desarrollo rápido de piezas y la importancia del control del centro del tablero.",
                    "Además, se analizan los errores más comunes que suelen cometer los principiantes para evitarlos y acelerar el progreso en el aprendizaje.",
                ], en: [
                    "En este módulo se explican detalladamente las reglas básicas, desde cómo se mueve cada pieza hasta las normas específicas como el enroque y la captura al paso.",
                    "Se hace énfasis en entender el objetivo principal del juego, que es dar jaque mate al rey enemigo, y las distintas formas en que se puede alcanzar esta meta.",
                    "Los alumnos aprenderán los principios fundamentales para comenzar la partida con buen pie, incluyendo el desarrollo rápido de piezas y la importancia del control del centro del tablero.",
                    "Además, se analizan los errores más comunes que suelen cometer los principiantes para evitarlos y acelerar el progreso en el aprendizaje.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Bases sólidas", en: "Bases sólidas" },
                        description: { es: "Establecer un fundamento robusto para progresar en ajedrez.", en: "Establecer un fundamento robusto para progresar en ajedrez." },
                    },
                    {
                        id: 2,
                        title: { es: "Tácticas iniciales", en: "Tácticas iniciales" },
                        description: { es: "Reconocer patrones básicos de ataque y defensa.", en: "Reconocer patrones básicos de ataque y defensa." },
                    },
                    {
                        id: 3,
                        title: { es: "Pensamiento estratégico", en: "Pensamiento estratégico" },
                        description: { es: "Comenzar a planear jugadas anticipadas.", en: "Comenzar a planear jugadas anticipadas." },
                    },
                ],
                detailDescription: { es: [
                    "Este curso te preparará para construir una base sólida que te permita entender el juego y mejorar con rapidez.",
                    "Aprenderás a identificar tácticas básicas que te ayudarán a proteger tus piezas y aprovechar las debilidades del oponente.",
                    "Desarrollarás habilidades de pensamiento estratégico, comenzando a planificar tus movimientos de manera anticipada y a evaluar las consecuencias de tus jugadas.",
                ], en: [
                    "Este curso te preparará para construir una base sólida que te permita entender el juego y mejorar con rapidez.",
                    "Aprenderás a identificar tácticas básicas que te ayudarán a proteger tus piezas y aprovechar las debilidades del oponente.",
                    "Desarrollarás habilidades de pensamiento estratégico, comenzando a planificar tus movimientos de manera anticipada y a evaluar las consecuencias de tus jugadas.",
                ] },
            },
            authors: [1, 2],
        },
        {
            courseID: 2,
            createdAt: "2025-07-17",
            imageUrl: {
                general: "course-image-full-2_1920x1271_.webp",
                full: "course-image-full-2_1920x1271_.webp",
                thumb: "course-image-thumb-2_649x424_.webp",
            },
            sales: 756,
            title: { es: "Aperturas Fundamentales", en: "Aperturas Fundamentales" },
            shortDescription: { es: "Domina las aperturas básicas que todo jugador debe conocer.", en: "Domina las aperturas básicas que todo jugador debe conocer." },
            level: "Principiante",
            price: 12.5,

            detailDescription: { es: "En este curso profundizamos en las aperturas clásicas y sus objetivos estratégicos, para que puedas iniciar tus partidas con confianza y ventaja.", en: "En este curso profundizamos en las aperturas clásicas y sus objetivos estratégicos, para que puedas iniciar tus partidas con confianza y ventaja." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Apertura Española", en: "Apertura Española" },
                        description: { es: "Control y presión en el centro.", en: "Control y presión en el centro." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ideas principales", en: "Ideas principales" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Planes típicos", en: "Planes típicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Apertura Italiana", en: "Apertura Italiana" },
                        description: { es: "Desarrollo rápido y ataques tempranos.", en: "Desarrollo rápido y ataques tempranos." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Líneas principales", en: "Líneas principales" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ataques comunes", en: "Ataques comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Defensa Siciliana", en: "Defensa Siciliana" },
                        description: { es: "Contraataque y dinámica.", en: "Contraataque y dinámica." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Estructuras típicas", en: "Estructuras típicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Planes de negras", en: "Planes de negras" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Defensa Francesa", en: "Defensa Francesa" },
                        description: { es: "Solidez y estructura.", en: "Solidez y estructura." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Planes de blancas", en: "Planes de blancas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Planes de negras", en: "Planes de negras" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Estrategias de apertura", en: "Estrategias de apertura" },
                        description: { es: "Ideas comunes para consolidar la posición.", en: "Ideas comunes para consolidar la posición." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Principios básicos", en: "Principios básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Analizaremos en profundidad las aperturas más populares, sus movimientos característicos y la lógica detrás de cada jugada.",
                    "Se explicará cómo elegir la apertura adecuada según tu estilo de juego y cómo adaptarte a las respuestas del rival.",
                    "Cada apertura será desglosada con ejemplos prácticos y partidas históricas que ilustran sus ventajas y posibles riesgos.",
                    "También se enseñarán los principios fundamentales que subyacen en todas las aperturas, como el control del centro, desarrollo rápido y seguridad del rey.",
                ], en: [
                    "Analizaremos en profundidad las aperturas más populares, sus movimientos característicos y la lógica detrás de cada jugada.",
                    "Se explicará cómo elegir la apertura adecuada según tu estilo de juego y cómo adaptarte a las respuestas del rival.",
                    "Cada apertura será desglosada con ejemplos prácticos y partidas históricas que ilustran sus ventajas y posibles riesgos.",
                    "También se enseñarán los principios fundamentales que subyacen en todas las aperturas, como el control del centro, desarrollo rápido y seguridad del rey.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Reconocer aperturas", en: "Reconocer aperturas" },
                        description: { es: "Identificar las principales líneas de juego.", en: "Identificar las principales líneas de juego." },
                    },
                    {
                        id: 2,
                        title: { es: "Adaptar estrategia", en: "Adaptar estrategia" },
                        description: { es: "Modificar planes según la respuesta del rival.", en: "Modificar planes según la respuesta del rival." },
                    },
                    {
                        id: 3,
                        title: { es: "Control del centro", en: "Control del centro" },
                        description: { es: "Fundamento para una apertura exitosa.", en: "Fundamento para una apertura exitosa." },
                    },
                ],
                detailDescription: { es: [
                    "Al completar este curso, podrás identificar y jugar las aperturas básicas con seguridad y coherencia.",
                    "Aprenderás a ajustar tu estrategia según las variantes que el oponente elija, manteniendo siempre el control del centro.",
                    "Desarrollarás un sentido más profundo del valor posicional que las aperturas buscan establecer para lograr ventaja en el medio juego.",
                ], en: [
                    "Al completar este curso, podrás identificar y jugar las aperturas básicas con seguridad y coherencia.",
                    "Aprenderás a ajustar tu estrategia según las variantes que el oponente elija, manteniendo siempre el control del centro.",
                    "Desarrollarás un sentido más profundo del valor posicional que las aperturas buscan establecer para lograr ventaja en el medio juego.",
                ] },
            },
            authors: [3, 4],
        },
        {
            courseID: 3,
            createdAt: "2024-03-17",
            imageUrl: {
                general: "course-image-full-3_1920x1280_.webp",
                full: "course-image-full-3_1920x1280_.webp",
                thumb: "course-image-thumb-3_640x427_.webp",
            },
            sales: 768,
            title: { es: "Errores Comunes y Cómo Evitarlos", en: "Errores Comunes y Cómo Evitarlos" },
            shortDescription: { es: "Identifica y corrige los errores más frecuentes en partidas de principiantes.", en: "Identifica y corrige los errores más frecuentes en partidas de principiantes." },
            level: "Principiante",
            price: 11.99,

            detailDescription: { es: "Un curso que analiza los errores más comunes cometidos en las primeras etapas del aprendizaje del ajedrez. Aprenderás cómo evitarlos y convertirlos en oportunidades de mejora.", en: "Un curso que analiza los errores más comunes cometidos en las primeras etapas del aprendizaje del ajedrez. Aprenderás cómo evitarlos y convertirlos en oportunidades de mejora." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Mover la misma pieza varias veces", en: "Mover la misma pieza varias veces" },
                        description: { es: "Cómo desperdiciar tiempos y perder la iniciativa.", en: "Cómo desperdiciar tiempos y perder la iniciativa." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Errores al repetir piezas", en: "Errores al repetir piezas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Consecuencias del retraso", en: "Consecuencias del retraso" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Olvidar el desarrollo", en: "Olvidar el desarrollo" },
                        description: { es: "Errores estratégicos al no sacar piezas menores a tiempo.", en: "Errores estratégicos al no sacar piezas menores a tiempo." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Importancia del desarrollo", en: "Importancia del desarrollo" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores típicos", en: "Errores típicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "No enrocarse", en: "No enrocarse" },
                        description: { es: "Por qué la seguridad del rey es crucial.", en: "Por qué la seguridad del rey es crucial." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Riesgos de no enrocar", en: "Riesgos de no enrocar" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos prácticos", en: "Ejemplos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Abrir líneas sin control", en: "Abrir líneas sin control" },
                        description: { es: "Errores de peones que debilitan la posición.", en: "Errores de peones que debilitan la posición." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Debilidades de peones", en: "Debilidades de peones" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Consecuencias estratégicas", en: "Consecuencias estratégicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Ignorar amenazas del rival", en: "Ignorar amenazas del rival" },
                        description: { es: "Falta de cálculo o sobreconfianza en posiciones aparentemente seguras.", en: "Falta de cálculo o sobreconfianza en posiciones aparentemente seguras." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejemplos de amenazas", en: "Ejemplos de amenazas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Cómo detectarlas", en: "Cómo detectarlas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "El contenido del curso gira en torno a los patrones de error más frecuentes observados en jugadores de nivel principiante. Cada módulo presenta situaciones reales de partida donde se ha cometido uno de estos fallos y se analiza el porqué, sus consecuencias y cómo prevenirlos.",
                    "Se explica con profundidad por qué mover la misma pieza varias veces al inicio de la partida ralentiza el desarrollo y concede ventaja al oponente. También se aborda la importancia de sacar todas las piezas menores antes de emprender ataques prematuros.",
                    "La sección sobre el enroque muestra múltiples ejemplos de cómo retrasar o no enrocar puede ser letal, incluso en posiciones igualadas. Igualmente, se analizan aperturas que debilitan innecesariamente la estructura de peones sin compensación alguna.",
                    "Finalmente, se enfoca en mejorar la visión táctica a través del reconocimiento de amenazas del rival. El curso entrena al alumno a analizar con más profundidad cada jugada, evitando blunders simples y favoreciendo una toma de decisiones más sólida.",
                ], en: [
                    "El contenido del curso gira en torno a los patrones de error más frecuentes observados en jugadores de nivel principiante. Cada módulo presenta situaciones reales de partida donde se ha cometido uno de estos fallos y se analiza el porqué, sus consecuencias y cómo prevenirlos.",
                    "Se explica con profundidad por qué mover la misma pieza varias veces al inicio de la partida ralentiza el desarrollo y concede ventaja al oponente. También se aborda la importancia de sacar todas las piezas menores antes de emprender ataques prematuros.",
                    "La sección sobre el enroque muestra múltiples ejemplos de cómo retrasar o no enrocar puede ser letal, incluso en posiciones igualadas. Igualmente, se analizan aperturas que debilitan innecesariamente la estructura de peones sin compensación alguna.",
                    "Finalmente, se enfoca en mejorar la visión táctica a través del reconocimiento de amenazas del rival. El curso entrena al alumno a analizar con más profundidad cada jugada, evitando blunders simples y favoreciendo una toma de decisiones más sólida.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Desarrollo eficiente", en: "Desarrollo eficiente" },
                        description: { es: "Aplicar principios de apertura con lógica.", en: "Aplicar principios de apertura con lógica." },
                    },
                    {
                        id: 2,
                        title: { es: "Pensamiento reactivo", en: "Pensamiento reactivo" },
                        description: { es: "Aprender a detectar amenazas y responder correctamente.", en: "Aprender a detectar amenazas y responder correctamente." },
                    },
                    {
                        id: 3,
                        title: { es: "Disciplina estructural", en: "Disciplina estructural" },
                        description: { es: "Mantener estructuras de peones sólidas.", en: "Mantener estructuras de peones sólidas." },
                    },
                ],
                detailDescription: { es: [
                    "Este curso te entrenará para pensar de manera lógica y estratégica desde las primeras jugadas. Entenderás por qué el desarrollo correcto de las piezas es vital para tomar la iniciativa en la partida, y cómo pequeñas decisiones afectan el medio juego.",
                    "A través de análisis guiados, mejorarás tu pensamiento reactivo, desarrollando una mejor comprensión del ajedrez como juego de amenazas. Aprenderás a anticiparte a lo que tu rival pretende y cómo prevenir ataques antes de que sucedan.",
                    "También se destaca la importancia de la estructura de peones, mostrando cómo pequeños errores en el inicio pueden derivar en debilidades que persisten toda la partida. Aprenderás a construir posiciones sólidas y cómo castigar a quienes no lo hacen.",
                ], en: [
                    "Este curso te entrenará para pensar de manera lógica y estratégica desde las primeras jugadas. Entenderás por qué el desarrollo correcto de las piezas es vital para tomar la iniciativa en la partida, y cómo pequeñas decisiones afectan el medio juego.",
                    "A través de análisis guiados, mejorarás tu pensamiento reactivo, desarrollando una mejor comprensión del ajedrez como juego de amenazas. Aprenderás a anticiparte a lo que tu rival pretende y cómo prevenir ataques antes de que sucedan.",
                    "También se destaca la importancia de la estructura de peones, mostrando cómo pequeños errores en el inicio pueden derivar en debilidades que persisten toda la partida. Aprenderás a construir posiciones sólidas y cómo castigar a quienes no lo hacen.",
                ] },
            },
            authors: [5, 6],
        },

        {
            courseID: 4,
            createdAt: "2024-10-01",
            imageUrl: {
                general: "course-image-full-4_1920x1281_.webp",
                full: "course-image-full-4_1920x1281_.webp",
                thumb: "course-image-thumb-4_640x427_.webp",
            },
            sales: 567,
            title: { es: "Tácticas Intermedias", en: "Tácticas Intermedias" },
            shortDescription: { es: "Da el siguiente paso en tu entrenamiento táctico con conceptos más avanzados.", en: "Da el siguiente paso en tu entrenamiento táctico con conceptos más avanzados." },
            level: "Intermedio",
            price: 18.99,

            detailDescription: { es: "Para jugadores que ya dominan las tácticas básicas y quieren mejorar su precisión en combinaciones más complejas. Este curso lleva tu visión táctica al siguiente nivel.", en: "Para jugadores que ya dominan las tácticas básicas y quieren mejorar su precisión en combinaciones más complejas. Este curso lleva tu visión táctica al siguiente nivel." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Combinaciones múltiples", en: "Combinaciones múltiples" },
                        description: { es: "Secuencias de táctica encadenada.", en: "Secuencias de táctica encadenada." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Secuencias largas", en: "Secuencias largas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Desviación avanzada", en: "Desviación avanzada" },
                        description: { es: "Forzar piezas fuera de su posición crítica.", en: "Forzar piezas fuera de su posición crítica." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Conceptos de desviación", en: "Conceptos de desviación" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos tácticos", en: "Ejemplos tácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Sacrificios posicionales", en: "Sacrificios posicionales" },
                        description: { es: "Ofrecer material por iniciativa o ataque.", en: "Ofrecer material por iniciativa o ataque." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Cuándo sacrificar", en: "Cuándo sacrificar" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos históricos", en: "Ejemplos históricos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Doble amenaza con rayos X", en: "Doble amenaza con rayos X" },
                        description: { es: "Amenazas ocultas a través de piezas.", en: "Amenazas ocultas a través de piezas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Rayos X básicos", en: "Rayos X básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Aplicaciones prácticas", en: "Aplicaciones prácticas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Transposición táctica", en: "Transposición táctica" },
                        description: { es: "Alterar el orden natural para obtener ventaja.", en: "Alterar el orden natural para obtener ventaja." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Concepto de transposición", en: "Concepto de transposición" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Este curso aborda conceptos tácticos más avanzados mediante el estudio de combinaciones complejas en situaciones reales. Las lecciones se centran en desarrollar la capacidad de encontrar secuencias tácticas profundas que requieran cálculo y visualización precisa.",
                    "Cada táctica se introduce con teoría y luego se explora a través de ejemplos comentados que muestran cómo surgieron y qué decisiones tomó el jugador. Aprenderás cómo sacrificar una pieza en el momento justo para abrir líneas decisivas o desorganizar la defensa rival.",
                    "A diferencia de los cursos básicos, aquí se enfatiza el cálculo preciso. Aprenderás a anticipar respuestas del oponente y a calcular variantes más allá de tres jugadas. Esto es clave para superar a jugadores del mismo nivel.",
                    "Además, se exploran temas tácticos menos conocidos pero muy eficaces, como la transposición táctica y los ataques con rayos X combinados. Estos conceptos elevan tu juego táctico y te preparan para enfrentar partidas mucho más exigentes.",
                ], en: [
                    "Este curso aborda conceptos tácticos más avanzados mediante el estudio de combinaciones complejas en situaciones reales. Las lecciones se centran en desarrollar la capacidad de encontrar secuencias tácticas profundas que requieran cálculo y visualización precisa.",
                    "Cada táctica se introduce con teoría y luego se explora a través de ejemplos comentados que muestran cómo surgieron y qué decisiones tomó el jugador. Aprenderás cómo sacrificar una pieza en el momento justo para abrir líneas decisivas o desorganizar la defensa rival.",
                    "A diferencia de los cursos básicos, aquí se enfatiza el cálculo preciso. Aprenderás a anticipar respuestas del oponente y a calcular variantes más allá de tres jugadas. Esto es clave para superar a jugadores del mismo nivel.",
                    "Además, se exploran temas tácticos menos conocidos pero muy eficaces, como la transposición táctica y los ataques con rayos X combinados. Estos conceptos elevan tu juego táctico y te preparan para enfrentar partidas mucho más exigentes.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Cálculo profundo", en: "Cálculo profundo" },
                        description: { es: "Visualizar combinaciones con precisión.", en: "Visualizar combinaciones con precisión." },
                    },
                    {
                        id: 2,
                        title: { es: "Sacrificios intuitivos", en: "Sacrificios intuitivos" },
                        description: { es: "Confiar en la iniciativa aún sin evaluación concreta.", en: "Confiar en la iniciativa aún sin evaluación concreta." },
                    },
                    {
                        id: 3,
                        title: { es: "Análisis post-partida", en: "Análisis post-partida" },
                        description: { es: "Revisar tácticas fallidas y aprender de ellas.", en: "Revisar tácticas fallidas y aprender de ellas." },
                    },
                ],
                detailDescription: { es: [
                    "Este curso te ayudará a mejorar tu capacidad de cálculo mediante ejercicios progresivos que entrenan tu visualización, concentración y memoria de variantes. El objetivo es que seas capaz de calcular 4 o 5 jugadas con confianza.",
                    "También aprenderás cuándo hacer sacrificios sin tener certeza completa, confiando en patrones y conceptos posicionales que respaldan la decisión. Estas habilidades son esenciales en partidas dinámicas y de ataque.",
                    "Finalmente, se promueve la reflexión post-partida como hábito clave para el crecimiento. Aprenderás a detectar qué combinaciones fallaste, por qué lo hiciste, y cómo no volver a cometer los mismos errores tácticos.",
                ], en: [
                    "Este curso te ayudará a mejorar tu capacidad de cálculo mediante ejercicios progresivos que entrenan tu visualización, concentración y memoria de variantes. El objetivo es que seas capaz de calcular 4 o 5 jugadas con confianza.",
                    "También aprenderás cuándo hacer sacrificios sin tener certeza completa, confiando en patrones y conceptos posicionales que respaldan la decisión. Estas habilidades son esenciales en partidas dinámicas y de ataque.",
                    "Finalmente, se promueve la reflexión post-partida como hábito clave para el crecimiento. Aprenderás a detectar qué combinaciones fallaste, por qué lo hiciste, y cómo no volver a cometer los mismos errores tácticos.",
                ] },
            },
            authors: [7, 8],
        },

        {
            courseID: 5,
            createdAt: "2024-11-02",
            imageUrl: {
                general: "course-image-full-5_1920x1280_.webp",
                full: "course-image-full-5_1920x1280_.webp",
                thumb: "course-image-thumb-5_640x427_.webp",
            },
            sales: 1987,
            title: { es: "Estrategia Posicional Básica", en: "Estrategia Posicional Básica" },
            shortDescription: { es: "Aprende los principios que rigen el ajedrez más allá de las tácticas inmediatas.", en: "Aprende los principios que rigen el ajedrez más allá de las tácticas inmediatas." },
            level: "Intermedio",
            price: 16.5,

            detailDescription: { es: "Curso esencial para aquellos que ya dominan la táctica básica y desean profundizar en los fundamentos estratégicos del ajedrez posicional.", en: "Curso esencial para aquellos que ya dominan la táctica básica y desean profundizar en los fundamentos estratégicos del ajedrez posicional." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Casillas débiles", en: "Casillas débiles" },
                        description: { es: "Identificar y explotar puntos vulnerables.", en: "Identificar y explotar puntos vulnerables." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Detectar casillas débiles", en: "Detectar casillas débiles" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Explotación práctica", en: "Explotación práctica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Mayoría de peones", en: "Mayoría de peones" },
                        description: { es: "Cómo utilizarla para generar ventajas.", en: "Cómo utilizarla para generar ventajas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Conceptos básicos", en: "Conceptos básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos de uso", en: "Ejemplos de uso" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Buenas y malas piezas", en: "Buenas y malas piezas" },
                        description: { es: "Diferenciar piezas activas y pasivas.", en: "Diferenciar piezas activas y pasivas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Buenas piezas", en: "Buenas piezas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Piezas pasivas", en: "Piezas pasivas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Control de columnas abiertas", en: "Control de columnas abiertas" },
                        description: { es: "Cómo usar las torres estratégicamente.", en: "Cómo usar las torres estratégicamente." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Columna abierta", en: "Columna abierta" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos con torres", en: "Ejemplos con torres" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Planes a largo plazo", en: "Planes a largo plazo" },
                        description: { es: "Tomar decisiones más allá de la táctica inmediata.", en: "Tomar decisiones más allá de la táctica inmediata." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Planificación estratégica", en: "Planificación estratégica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Este curso proporciona las bases de pensamiento posicional necesarias para mejorar tu nivel general de ajedrez. Se explican conceptos esenciales como casillas débiles, estructuras de peones y planes a largo plazo que definen la calidad de una posición.",
                    "A través del análisis de partidas modelo, se enseñan técnicas para explotar debilidades, entender cuándo cambiar piezas y cómo transformar una ventaja pequeña en una ganancia definitiva.",
                    "También se trabajan temas como el uso correcto de la mayoría de peones en un flanco, o cómo convertir una columna abierta en una autopista de ataque para las torres. Estas ideas marcan la diferencia entre un jugador táctico y uno estratégico.",
                    "Cada lección incluye ejemplos prácticos y desafíos que entrenan tu comprensión global de las posiciones, para que puedas construir planes coherentes incluso sin tácticas inmediatas a la vista.",
                ], en: [
                    "Este curso proporciona las bases de pensamiento posicional necesarias para mejorar tu nivel general de ajedrez. Se explican conceptos esenciales como casillas débiles, estructuras de peones y planes a largo plazo que definen la calidad de una posición.",
                    "A través del análisis de partidas modelo, se enseñan técnicas para explotar debilidades, entender cuándo cambiar piezas y cómo transformar una ventaja pequeña en una ganancia definitiva.",
                    "También se trabajan temas como el uso correcto de la mayoría de peones en un flanco, o cómo convertir una columna abierta en una autopista de ataque para las torres. Estas ideas marcan la diferencia entre un jugador táctico y uno estratégico.",
                    "Cada lección incluye ejemplos prácticos y desafíos que entrenan tu comprensión global de las posiciones, para que puedas construir planes coherentes incluso sin tácticas inmediatas a la vista.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Pensamiento estratégico", en: "Pensamiento estratégico" },
                        description: { es: "Planear en función del tipo de posición.", en: "Planear en función del tipo de posición." },
                    },
                    {
                        id: 2,
                        title: { es: "Gestión del material", en: "Gestión del material" },
                        description: { es: "Cambiar o conservar piezas según su función.", en: "Cambiar o conservar piezas según su función." },
                    },
                    {
                        id: 3,
                        title: { es: "Paciencia y maniobras", en: "Paciencia y maniobras" },
                        description: { es: "Aprender a ganar con lentitud y lógica.", en: "Aprender a ganar con lentitud y lógica." },
                    },
                ],
                detailDescription: { es: [
                    "Tras finalizar este curso, comprenderás que el ajedrez no es solo cálculo, sino también planificación. Serás capaz de identificar las debilidades estructurales en una posición y construir un plan para explotarlas.",
                    "El curso entrena la gestión eficiente del material: cuándo cambiar, cuándo conservar y cómo valorar la actividad de cada pieza más allá de su valor numérico.",
                    "Además, se trabaja la paciencia como virtud del jugador posicional. Aprenderás a maniobrar tus piezas durante varios turnos con un objetivo claro, generando ventajas sin necesidad de combinaciones tácticas inmediatas.",
                ], en: [
                    "Tras finalizar este curso, comprenderás que el ajedrez no es solo cálculo, sino también planificación. Serás capaz de identificar las debilidades estructurales en una posición y construir un plan para explotarlas.",
                    "El curso entrena la gestión eficiente del material: cuándo cambiar, cuándo conservar y cómo valorar la actividad de cada pieza más allá de su valor numérico.",
                    "Además, se trabaja la paciencia como virtud del jugador posicional. Aprenderás a maniobrar tus piezas durante varios turnos con un objetivo claro, generando ventajas sin necesidad de combinaciones tácticas inmediatas.",
                ] },
            },
            authors: [9, 10],
        },
        {
            courseID: 6,
            createdAt: "2024-05-14",
            imageUrl: {
                general: "course-image-full-6_1920x1080_.webp",
                full: "course-image-full-6_1920x1080_.webp",
                thumb: "course-image-thumb-6_640x360_.webp",
            },
            sales: 345,
            title: { es: "Finales Básicos", en: "Finales Básicos" },
            shortDescription: { es: "Domina los conceptos esenciales para cerrar tus partidas con éxito.", en: "Domina los conceptos esenciales para cerrar tus partidas con éxito." },
            level: "Principiante",
            price: 13.5,

            detailDescription: { es: "Este curso está diseñado para enseñarte los finales más comunes y cómo jugar con precisión en las etapas decisivas de la partida.", en: "Este curso está diseñado para enseñarte los finales más comunes y cómo jugar con precisión en las etapas decisivas de la partida." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Finales de rey y peón", en: "Finales de rey y peón" },
                        description: { es: "Técnicas para coronar peones y defender.", en: "Técnicas para coronar peones y defender." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Coronación", en: "Coronación" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Oposición", en: "Oposición" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Finales de torre", en: "Finales de torre" },
                        description: { es: "Cómo usar la torre para dominar en el final.", en: "Cómo usar la torre para dominar en el final." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Principios básicos", en: "Principios básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Finales de alfil y caballo", en: "Finales de alfil y caballo" },
                        description: { es: "Ventajas y desventajas en los finales menores.", en: "Ventajas y desventajas en los finales menores." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Final de alfil", en: "Final de alfil" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 1,
                                title: { es: "Final de caballo", en: "Final de caballo" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Reglas de oposición", en: "Reglas de oposición" },
                        description: { es: "Conceptos clave para el movimiento del rey.", en: "Conceptos clave para el movimiento del rey." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Oposición directa", en: "Oposición directa" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios", en: "Ejercicios" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Finales teóricos importantes", en: "Finales teóricos importantes" },
                        description: { es: "Estudio de posiciones clásicas.", en: "Estudio de posiciones clásicas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Posiciones básicas", en: "Posiciones básicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Estudio avanzado", en: "Estudio avanzado" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Este módulo te guía a través de las posiciones finales más frecuentes y cómo resolverlas correctamente para ganar o empatar la partida.",
                    "Aprenderás las técnicas esenciales para mover peones y reyes de manera efectiva, incluyendo la oposición y la zugzwang.",
                    "Se explican las particularidades de los finales con torres, alfiles y caballos, y cómo aprovechar las características de cada pieza en esta fase del juego.",
                    "Además, se estudian finales teóricos clásicos, que todo jugador debe conocer para evitar errores costosos.",
                ], en: [
                    "Este módulo te guía a través de las posiciones finales más frecuentes y cómo resolverlas correctamente para ganar o empatar la partida.",
                    "Aprenderás las técnicas esenciales para mover peones y reyes de manera efectiva, incluyendo la oposición y la zugzwang.",
                    "Se explican las particularidades de los finales con torres, alfiles y caballos, y cómo aprovechar las características de cada pieza en esta fase del juego.",
                    "Además, se estudian finales teóricos clásicos, que todo jugador debe conocer para evitar errores costosos.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Precisión en finales", en: "Precisión en finales" },
                        description: { es: "Tomar decisiones correctas bajo presión.", en: "Tomar decisiones correctas bajo presión." },
                    },
                    {
                        id: 2,
                        title: { es: "Conservación de material", en: "Conservación de material" },
                        description: { es: "Cómo mantener la ventaja en el final.", en: "Cómo mantener la ventaja en el final." },
                    },
                    {
                        id: 3,
                        title: { es: "Planificación del final", en: "Planificación del final" },
                        description: { es: "Visualizar y ejecutar planes de cierre.", en: "Visualizar y ejecutar planes de cierre." },
                    },
                ],
                detailDescription: { es: [
                    "Al completar este curso, serás capaz de manejar los finales más comunes con seguridad y precisión, evitando errores que suelen costar partidas.",
                    "Desarrollarás la habilidad para conservar ventajas materiales y para planificar movimientos con varios turnos de anticipación.",
                    "El curso te prepara para enfrentar situaciones de presión y tomar decisiones acertadas que te acerquen a la victoria.",
                ], en: [
                    "Al completar este curso, serás capaz de manejar los finales más comunes con seguridad y precisión, evitando errores que suelen costar partidas.",
                    "Desarrollarás la habilidad para conservar ventajas materiales y para planificar movimientos con varios turnos de anticipación.",
                    "El curso te prepara para enfrentar situaciones de presión y tomar decisiones acertadas que te acerquen a la victoria.",
                ] },
            },
            authors: [11, 12],
        },
        {
            courseID: 7,
            createdAt: "2025-01-13",
            imageUrl: {
                general: "course-image-full-7_1920x1280_.webp",
                full: "course-image-full-7_1920x1280_.webp",
                thumb: "course-image-thumb-7_640x426_.webp",
            },
            sales: 987,
            title: { es: "Aperturas Avanzadas", en: "Aperturas Avanzadas" },
            shortDescription: { es: "Expande tu repertorio con aperturas complejas y dinámicas.", en: "Expande tu repertorio con aperturas complejas y dinámicas." },
            level: "Avanzado",
            price: 21.0,

            detailDescription: { es: "Este curso está pensado para jugadores que buscan dominar aperturas con profundidad estratégica y variantes avanzadas para sorprender a sus rivales.", en: "Este curso está pensado para jugadores que buscan dominar aperturas con profundidad estratégica y variantes avanzadas para sorprender a sus rivales." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Defensa Nimzoindia", en: "Defensa Nimzoindia" },
                        description: { es: "Control del centro y flexibilidad.", en: "Control del centro y flexibilidad." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Líneas principales", en: "Líneas principales" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ideas típicas", en: "Ideas típicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Defensa Grünfeld", en: "Defensa Grünfeld" },
                        description: { es: "Contraataque dinámico y control posicional.", en: "Contraataque dinámico y control posicional." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Planes de blancas", en: "Planes de blancas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Planes de negras", en: "Planes de negras" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Apertura Reti", en: "Apertura Reti" },
                        description: { es: "Fianchetto y presión indirecta.", en: "Fianchetto y presión indirecta." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Introducción", en: "Introducción" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ideas estratégicas", en: "Ideas estratégicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Gambito de dama", en: "Gambito de dama" },
                        description: { es: "Opciones y planes estratégicos.", en: "Opciones y planes estratégicos." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Aceptado", en: "Aceptado" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Rechazado", en: "Rechazado" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Preparación y estudio de líneas", en: "Preparación y estudio de líneas" },
                        description: { es: "Cómo construir un repertorio sólido.", en: "Cómo construir un repertorio sólido." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Preparación previa", en: "Preparación previa" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Métodos de estudio", en: "Métodos de estudio" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Se profundiza en aperturas que requieren un conocimiento detallado de variantes y planes a largo plazo, ideales para jugadores que quieren elevar su nivel.",
                    "Cada apertura se analiza en su contexto histórico y estratégico, presentando las ideas principales y las amenazas típicas que surgen.",
                    "El curso enseña a preparar líneas específicas y a adaptar el repertorio personal a diferentes estilos de juego y rivales.",
                    "Se incluyen consejos prácticos para memorizar variantes y cómo interpretar los movimientos para tomar decisiones basadas en la posición, no solo en la teoría.",
                ], en: [
                    "Se profundiza en aperturas que requieren un conocimiento detallado de variantes y planes a largo plazo, ideales para jugadores que quieren elevar su nivel.",
                    "Cada apertura se analiza en su contexto histórico y estratégico, presentando las ideas principales y las amenazas típicas que surgen.",
                    "El curso enseña a preparar líneas específicas y a adaptar el repertorio personal a diferentes estilos de juego y rivales.",
                    "Se incluyen consejos prácticos para memorizar variantes y cómo interpretar los movimientos para tomar decisiones basadas en la posición, no solo en la teoría.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Análisis profundo", en: "Análisis profundo" },
                        description: { es: "Comprender las ideas detrás de las jugadas.", en: "Comprender las ideas detrás de las jugadas." },
                    },
                    {
                        id: 2,
                        title: { es: "Flexibilidad estratégica", en: "Flexibilidad estratégica" },
                        description: { es: "Adaptar planes según el desarrollo.", en: "Adaptar planes según el desarrollo." },
                    },
                    {
                        id: 3,
                        title: { es: "Memorización efectiva", en: "Memorización efectiva" },
                        description: { es: "Técnicas para retener variantes.", en: "Técnicas para retener variantes." },
                    },
                ],
                detailDescription: { es: [
                    "Con este curso, lograrás analizar posiciones complejas y entender las ideas estratégicas que sustentan cada movimiento.",
                    "Aprenderás a ser flexible en tu juego, adaptándote a las respuestas del rival y modificando planes según el contexto.",
                    "Además, desarrollarás métodos para memorizar aperturas y variantes, facilitando el estudio continuo y la preparación para torneos.",
                ], en: [
                    "Con este curso, lograrás analizar posiciones complejas y entender las ideas estratégicas que sustentan cada movimiento.",
                    "Aprenderás a ser flexible en tu juego, adaptándote a las respuestas del rival y modificando planes según el contexto.",
                    "Además, desarrollarás métodos para memorizar aperturas y variantes, facilitando el estudio continuo y la preparación para torneos.",
                ] },
            },
            authors: [13, 14],
        },
        {
            courseID: 8,
            createdAt: "2024-08-22",
            imageUrl: {
                general: "course-image-full-8_1920x1280_.webp",
                full: "course-image-full-8_1920x1280_.webp",
                thumb: "course-image-thumb-8_640x426_.webp",
            },
            sales: 465,
            title: { es: "Tácticas Avanzadas", en: "Tácticas Avanzadas" },
            shortDescription: { es: "Mejora tu capacidad para encontrar combinaciones complejas y decisivas.", en: "Mejora tu capacidad para encontrar combinaciones complejas y decisivas." },
            level: "Avanzado",
            price: 22.5,

            detailDescription: { es: "Curso orientado a jugadores que quieren perfeccionar su visión táctica y dominar maniobras que cambian el rumbo de las partidas.", en: "Curso orientado a jugadores que quieren perfeccionar su visión táctica y dominar maniobras que cambian el rumbo de las partidas." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Clavadas y ataques dobles", en: "Clavadas y ataques dobles" },
                        description: { es: "Identificar oportunidades tácticas.", en: "Identificar oportunidades tácticas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Clavadas típicas", en: "Clavadas típicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ataques dobles", en: "Ataques dobles" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Redirección y desvío", en: "Redirección y desvío" },
                        description: { es: "Manipular las piezas rivales.", en: "Manipular las piezas rivales." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Redirección básica", en: "Redirección básica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Sacrificios tácticos", en: "Sacrificios tácticos" },
                        description: { es: "Ofrecer material por ventaja inmediata.", en: "Ofrecer material por ventaja inmediata." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Cuándo sacrificar", en: "Cuándo sacrificar" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos históricos", en: "Ejemplos históricos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Ataques descubiertos", en: "Ataques descubiertos" },
                        description: { es: "Maximizar la presión.", en: "Maximizar la presión." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ataque descubierto básico", en: "Ataque descubierto básico" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Patrones combinatorios", en: "Patrones combinatorios" },
                        description: { es: "Reconocer patrones recurrentes.", en: "Reconocer patrones recurrentes." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Patrones típicos", en: "Patrones típicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios de práctica", en: "Ejercicios de práctica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Este curso profundiza en temas tácticos complejos mediante el análisis de combinaciones brillantes y sus fundamentos conceptuales.",
                    "Se enseña a reconocer patrones tácticos avanzados y a calcular variantes con precisión para aprovechar oportunidades en el tablero.",
                    "Los ejercicios incluyen sacrificios y maniobras poco comunes que requieren visión y cálculo profundos.",
                    "El objetivo es que los alumnos puedan aplicar estas tácticas en sus partidas para ganar ventajas decisivas.",
                ], en: [
                    "Este curso profundiza en temas tácticos complejos mediante el análisis de combinaciones brillantes y sus fundamentos conceptuales.",
                    "Se enseña a reconocer patrones tácticos avanzados y a calcular variantes con precisión para aprovechar oportunidades en el tablero.",
                    "Los ejercicios incluyen sacrificios y maniobras poco comunes que requieren visión y cálculo profundos.",
                    "El objetivo es que los alumnos puedan aplicar estas tácticas en sus partidas para ganar ventajas decisivas.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Visualización avanzada", en: "Visualización avanzada" },
                        description: { es: "Mejorar la capacidad de cálculo.", en: "Mejorar la capacidad de cálculo." },
                    },
                    {
                        id: 2,
                        title: { es: "Reconocimiento de patrones", en: "Reconocimiento de patrones" },
                        description: { es: "Aprender a identificar señales tácticas.", en: "Aprender a identificar señales tácticas." },
                    },
                    {
                        id: 3,
                        title: { es: "Confianza en sacrificios", en: "Confianza en sacrificios" },
                        description: { es: "Evaluar cuándo y cómo sacrificar.", en: "Evaluar cuándo y cómo sacrificar." },
                    },
                ],
                detailDescription: { es: [
                    "Mejorarás tu capacidad para visualizar jugadas múltiples y anticipar respuestas del adversario.",
                    "Aprenderás a reconocer patrones tácticos que aparecen frecuentemente en partidas de alto nivel.",
                    "Desarrollarás confianza para realizar sacrificios que aumenten tus chances de ataque o ganancia material.",
                ], en: [
                    "Mejorarás tu capacidad para visualizar jugadas múltiples y anticipar respuestas del adversario.",
                    "Aprenderás a reconocer patrones tácticos que aparecen frecuentemente en partidas de alto nivel.",
                    "Desarrollarás confianza para realizar sacrificios que aumenten tus chances de ataque o ganancia material.",
                ] },
            },
            authors: [15, 16],
        },
        {
            courseID: 9,
            createdAt: "2023-12-29",
            imageUrl: {
                general: "course-image-full-9_1920x1280_.webp",
                full: "course-image-full-9_1920x1280_.webp",
                thumb: "course-image-thumb-9_640x426_.webp",
            },
            sales: 1098,
            title: { es: "Estrategia Posicional Avanzada", en: "Estrategia Posicional Avanzada" },
            shortDescription: { es: "Perfecciona tu comprensión del juego posicional para controlar la partida.", en: "Perfecciona tu comprensión del juego posicional para controlar la partida." },
            level: "Avanzado",
            price: 20.0,

            detailDescription: { es: "Curso destinado a jugadores que buscan profundizar en el ajedrez posicional y entender las sutilezas del control del espacio y la estructura.", en: "Curso destinado a jugadores que buscan profundizar en el ajedrez posicional y entender las sutilezas del control del espacio y la estructura." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Casillas fuertes y débiles", en: "Casillas fuertes y débiles" },
                        description: { es: "Análisis detallado del terreno.", en: "Análisis detallado del terreno." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Identificar casillas", en: "Identificar casillas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Explotación práctica", en: "Explotación práctica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Planes de expansión", en: "Planes de expansión" },
                        description: { es: "Incrementar el espacio y la influencia.", en: "Incrementar el espacio y la influencia." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Expansión en flancos", en: "Expansión en flancos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos estratégicos", en: "Ejemplos estratégicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Control de columnas y diagonales", en: "Control de columnas y diagonales" },
                        description: { es: "Optimización de piezas.", en: "Optimización de piezas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Control de columnas", en: "Control de columnas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Control de diagonales", en: "Control de diagonales" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Bloqueos y maniobras", en: "Bloqueos y maniobras" },
                        description: { es: "Manipulación de la posición rival.", en: "Manipulación de la posición rival." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Técnicas de bloqueo", en: "Técnicas de bloqueo" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Evaluación posicional", en: "Evaluación posicional" },
                        description: { es: "Cómo valorar ventajas y desventajas.", en: "Cómo valorar ventajas y desventajas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Métodos de evaluación", en: "Métodos de evaluación" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Este curso explora los aspectos más profundos de la estrategia posicional, enseñando a evaluar y modificar la estructura y el control del tablero.",
                    "Se analizan casos prácticos para identificar casillas claves y desarrollar planes de expansión efectivos.",
                    "Los alumnos aprenderán a controlar columnas y diagonales estratégicas con sus piezas para maximizar su influencia.",
                    "También se estudian técnicas para bloquear las piezas rivales y maniobrar con el objetivo de mejorar la posición general.",
                    "Finalmente, se enseña cómo evaluar la posición para decidir cuándo cambiar o mantener piezas, y cómo transformar pequeñas ventajas en victorias.",
                ], en: [
                    "Este curso explora los aspectos más profundos de la estrategia posicional, enseñando a evaluar y modificar la estructura y el control del tablero.",
                    "Se analizan casos prácticos para identificar casillas claves y desarrollar planes de expansión efectivos.",
                    "Los alumnos aprenderán a controlar columnas y diagonales estratégicas con sus piezas para maximizar su influencia.",
                    "También se estudian técnicas para bloquear las piezas rivales y maniobrar con el objetivo de mejorar la posición general.",
                    "Finalmente, se enseña cómo evaluar la posición para decidir cuándo cambiar o mantener piezas, y cómo transformar pequeñas ventajas en victorias.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Análisis avanzado", en: "Análisis avanzado" },
                        description: { es: "Valorar posiciones complejas con precisión.", en: "Valorar posiciones complejas con precisión." },
                    },
                    {
                        id: 2,
                        title: { es: "Planificación a largo plazo", en: "Planificación a largo plazo" },
                        description: { es: "Diseñar planes coherentes y flexibles.", en: "Diseñar planes coherentes y flexibles." },
                    },
                    {
                        id: 3,
                        title: { es: "Adaptación y maniobras", en: "Adaptación y maniobras" },
                        description: { es: "Modificar planes según evolución de la partida.", en: "Modificar planes según evolución de la partida." },
                    },
                ],
                detailDescription: { es: [
                    "Al completar el curso, podrás realizar análisis posicionales profundos y tomar decisiones informadas para controlar el juego.",
                    "Desarrollarás la habilidad para planificar movimientos a largo plazo, ajustando estrategias a medida que cambia la situación en el tablero.",
                    "Aprenderás a adaptar tus maniobras para aprovechar debilidades y mantener la presión sobre el rival en todo momento.",
                ], en: [
                    "Al completar el curso, podrás realizar análisis posicionales profundos y tomar decisiones informadas para controlar el juego.",
                    "Desarrollarás la habilidad para planificar movimientos a largo plazo, ajustando estrategias a medida que cambia la situación en el tablero.",
                    "Aprenderás a adaptar tus maniobras para aprovechar debilidades y mantener la presión sobre el rival en todo momento.",
                ] },
            },
            authors: [1],
        },
        {
            courseID: 10,
            createdAt: "2024-12-19",
            imageUrl: {
                general: "course-image-full-10_1920x1280_.webp",
                full: "course-image-full-10_1920x1280_.webp",
                thumb: "course-image-thumb-10_640x426_.webp",
            },
            sales: 765,
            title: { es: "Psicología del Ajedrez", en: "Psicología del Ajedrez" },
            shortDescription: { es: "Controla tu mente para dominar el tablero.", en: "Controla tu mente para dominar el tablero." },
            level: "Intermedio",
            price: 18.0,

            detailDescription: { es: "En este curso, exploramos los aspectos mentales y emocionales del ajedrez, enseñándote a mantener la calma y tomar decisiones óptimas bajo presión.", en: "En este curso, exploramos los aspectos mentales y emocionales del ajedrez, enseñándote a mantener la calma y tomar decisiones óptimas bajo presión." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Gestión del estrés", en: "Gestión del estrés" },
                        description: { es: "Técnicas para controlar la ansiedad durante la partida.", en: "Técnicas para controlar la ansiedad durante la partida." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Métodos prácticos", en: "Métodos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios", en: "Ejercicios" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Concentración y foco", en: "Concentración y foco" },
                        description: { es: "Mejorar la atención y evitar distracciones.", en: "Mejorar la atención y evitar distracciones." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejercicios de concentración", en: "Ejercicios de concentración" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Manejo de la frustración", en: "Manejo de la frustración" },
                        description: { es: "Aprender a recuperarse de errores.", en: "Aprender a recuperarse de errores." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Control emocional", en: "Control emocional" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Psicología del rival", en: "Psicología del rival" },
                        description: { es: "Leer comportamientos y patrones.", en: "Leer comportamientos y patrones." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Interpretación básica", en: "Interpretación básica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos prácticos", en: "Ejemplos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Preparación mental para torneos", en: "Preparación mental para torneos" },
                        description: { es: "Estrategias para mantener la calma y confianza.", en: "Estrategias para mantener la calma y confianza." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Preparación previa", en: "Preparación previa" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Métodos de confianza", en: "Métodos de confianza" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Este módulo ofrece herramientas para manejar el estrés y la ansiedad que surgen durante las partidas, fundamentales para un rendimiento óptimo.",
                    "Aprenderás técnicas para mejorar tu concentración y mantener el foco durante largos períodos de juego.",
                    "Se abordan estrategias para manejar la frustración y el error, transformándolos en oportunidades de aprendizaje.",
                    "También se enseña cómo leer el comportamiento del rival para anticipar sus movimientos y estrategias.",
                    "Finalmente, se preparan métodos para la preparación mental previa y durante los torneos, que ayudan a mantener la confianza y la calma.",
                ], en: [
                    "Este módulo ofrece herramientas para manejar el estrés y la ansiedad que surgen durante las partidas, fundamentales para un rendimiento óptimo.",
                    "Aprenderás técnicas para mejorar tu concentración y mantener el foco durante largos períodos de juego.",
                    "Se abordan estrategias para manejar la frustración y el error, transformándolos en oportunidades de aprendizaje.",
                    "También se enseña cómo leer el comportamiento del rival para anticipar sus movimientos y estrategias.",
                    "Finalmente, se preparan métodos para la preparación mental previa y durante los torneos, que ayudan a mantener la confianza y la calma.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Control emocional", en: "Control emocional" },
                        description: { es: "Mantener la calma en situaciones difíciles.", en: "Mantener la calma en situaciones difíciles." },
                    },
                    {
                        id: 2,
                        title: { es: "Mejora del enfoque", en: "Mejora del enfoque" },
                        description: { es: "Incrementar la concentración y claridad mental.", en: "Incrementar la concentración y claridad mental." },
                    },
                    {
                        id: 3,
                        title: { es: "Lectura del adversario", en: "Lectura del adversario" },
                        description: { es: "Interpretar señales y patrones psicológicos.", en: "Interpretar señales y patrones psicológicos." },
                    },
                ],
                detailDescription: { es: [
                    "Con este curso, desarrollarás un mayor control emocional que te permitirá tomar decisiones más acertadas en momentos críticos.",
                    "Mejorarás tu capacidad para concentrarte durante toda la partida, evitando distracciones externas e internas.",
                    "Aprenderás a interpretar señales del adversario que te ayudarán a anticipar sus jugadas y ajustar tu estrategia.",
                ], en: [
                    "Con este curso, desarrollarás un mayor control emocional que te permitirá tomar decisiones más acertadas en momentos críticos.",
                    "Mejorarás tu capacidad para concentrarte durante toda la partida, evitando distracciones externas e internas.",
                    "Aprenderás a interpretar señales del adversario que te ayudarán a anticipar sus jugadas y ajustar tu estrategia.",
                ] },
            },
            authors: [5],
        },
        {
            courseID: 11,
            createdAt: "2024-5-28",
            imageUrl: {
                general: "course-image-full-11_1920x1280_.webp",
                full: "course-image-full-11_1920x1280_.webp",
                thumb: "course-image-thumb-11_640x426_.webp",
            },
            sales: 567,
            title: { es: "Torneos y Competición", en: "Torneos y Competición" },
            shortDescription: { es: "Prepárate para competir y destacar en torneos de ajedrez.", en: "Prepárate para competir y destacar en torneos de ajedrez." },
            level: "Intermedio",
            price: 19.5,

            detailDescription: { es: "Este curso te guía a través de todo lo que necesitas saber para participar con éxito en torneos, desde la preparación hasta la gestión del tiempo y la evaluación post-partida.", en: "Este curso te guía a través de todo lo que necesitas saber para participar con éxito en torneos, desde la preparación hasta la gestión del tiempo y la evaluación post-partida." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Reglas de torneos", en: "Reglas de torneos" },
                        description: { es: "Normativas y formatos comunes.", en: "Normativas y formatos comunes." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Reglamento básico", en: "Reglamento básico" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Preparación previa", en: "Preparación previa" },
                        description: { es: "Cómo estudiar y mentalizarse para competir.", en: "Cómo estudiar y mentalizarse para competir." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Preparación física", en: "Preparación física" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Preparación mental", en: "Preparación mental" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Gestión del tiempo", en: "Gestión del tiempo" },
                        description: { es: "Uso efectivo del reloj en partidas rápidas y clásicas.", en: "Uso efectivo del reloj en partidas rápidas y clásicas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Blitz y rápidas", en: "Blitz y rápidas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Clásicas", en: "Clásicas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Análisis post-partida", en: "Análisis post-partida" },
                        description: { es: "Aprender de tus errores y aciertos.", en: "Aprender de tus errores y aciertos." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Métodos de análisis", en: "Métodos de análisis" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos prácticos", en: "Ejemplos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Estrategias psicológicas", en: "Estrategias psicológicas" },
                        description: { es: "Mantener la calma y controlar el nerviosismo.", en: "Mantener la calma y controlar el nerviosismo." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Control del nerviosismo", en: "Control del nerviosismo" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "En este módulo conocerás las reglas específicas de los diferentes formatos de torneo, lo que te permitirá evitar errores formales y aprovechar las oportunidades.",
                    "Aprenderás técnicas para una preparación efectiva que abarque tanto el estudio del ajedrez como la preparación mental y física.",
                    "Se abordan métodos para administrar correctamente el tiempo de juego, evitando apuros y errores derivados de la presión.",
                    "También se enseña cómo analizar tus partidas para identificar áreas de mejora y consolidar fortalezas.",
                    "Finalmente, se incluyen estrategias para controlar el nerviosismo y mantener la concentración durante la competición.",
                ], en: [
                    "En este módulo conocerás las reglas específicas de los diferentes formatos de torneo, lo que te permitirá evitar errores formales y aprovechar las oportunidades.",
                    "Aprenderás técnicas para una preparación efectiva que abarque tanto el estudio del ajedrez como la preparación mental y física.",
                    "Se abordan métodos para administrar correctamente el tiempo de juego, evitando apuros y errores derivados de la presión.",
                    "También se enseña cómo analizar tus partidas para identificar áreas de mejora y consolidar fortalezas.",
                    "Finalmente, se incluyen estrategias para controlar el nerviosismo y mantener la concentración durante la competición.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Disciplina en torneos", en: "Disciplina en torneos" },
                        description: { es: "Conocer y respetar las reglas.", en: "Conocer y respetar las reglas." },
                    },
                    {
                        id: 2,
                        title: { es: "Preparación integral", en: "Preparación integral" },
                        description: { es: "Combinar estudio, mente y cuerpo.", en: "Combinar estudio, mente y cuerpo." },
                    },
                    {
                        id: 3,
                        title: { es: "Autocrítica constructiva", en: "Autocrítica constructiva" },
                        description: { es: "Usar el análisis para mejorar.", en: "Usar el análisis para mejorar." },
                    },
                ],
                detailDescription: { es: [
                    "Con este curso, estarás listo para afrontar cualquier torneo con la confianza y preparación necesarias para rendir al máximo.",
                    "Aprenderás a organizar tu estudio y preparación física y mental para estar en óptimas condiciones.",
                    "Desarrollarás la habilidad de evaluar tus partidas de forma objetiva para crecer constantemente como jugador.",
                ], en: [
                    "Con este curso, estarás listo para afrontar cualquier torneo con la confianza y preparación necesarias para rendir al máximo.",
                    "Aprenderás a organizar tu estudio y preparación física y mental para estar en óptimas condiciones.",
                    "Desarrollarás la habilidad de evaluar tus partidas de forma objetiva para crecer constantemente como jugador.",
                ] },
            },
            authors: [3, 6],
        },
        {
            courseID: 12,
            createdAt: "2024-10-10",
            imageUrl: {
                general: "course-image-full-12_1920x1280_.webp",
                full: "course-image-full-12_1920x1280_.webp",
                thumb: "course-image-thumb-12_640x426_.webp",
            },
            sales: 276,
            title: { es: "Ataques y Defensa", en: "Ataques y Defensa" },
            shortDescription: { es: "Domina técnicas para atacar y defender eficazmente en cualquier posición.", en: "Domina técnicas para atacar y defender eficazmente en cualquier posición." },
            level: "Intermedio",
            price: 20.0,
            detailDescription: { es: "Este curso te ayudará a mejorar tu capacidad para lanzar ataques potentes y defender posiciones difíciles, combinando teoría y práctica para obtener resultados inmediatos.", en: "Este curso te ayudará a mejorar tu capacidad para lanzar ataques potentes y defender posiciones difíciles, combinando teoría y práctica para obtener resultados inmediatos." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Ataques directos", en: "Ataques directos" },
                        description: { es: "Técnicas para penetrar la defensa rival.", en: "Técnicas para penetrar la defensa rival." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ataque al rey", en: "Ataque al rey" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos prácticos", en: "Ejemplos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Defensas activas", en: "Defensas activas" },
                        description: { es: "Cómo neutralizar amenazas y contraatacar.", en: "Cómo neutralizar amenazas y contraatacar." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Defensa activa básica", en: "Defensa activa básica" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Sacrificios estratégicos", en: "Sacrificios estratégicos" },
                        description: { es: "Cuándo y cómo ofrecer material.", en: "Cuándo y cómo ofrecer material." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Sacrificios comunes", en: "Sacrificios comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores frecuentes", en: "Errores frecuentes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Contraataques tácticos", en: "Contraataques tácticos" },
                        description: { es: "Transformar la defensa en ataque.", en: "Transformar la defensa en ataque." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejemplos prácticos", en: "Ejemplos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Evaluación dinámica", en: "Evaluación dinámica" },
                        description: { es: "Reconocer momentos para atacar o defender.", en: "Reconocer momentos para atacar o defender." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Métodos de evaluación", en: "Métodos de evaluación" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "El curso comienza con fundamentos para realizar ataques directos que desestabilicen al oponente y creen oportunidades decisivas.",
                    "Se estudian técnicas de defensa activa que no solo protegen, sino que permiten contraatacar y tomar la iniciativa.",
                    "Aprenderás cuándo y cómo realizar sacrificios estratégicos para obtener ventajas posicionales o materiales.",
                    "Se profundiza en la importancia del contraataque táctico para transformar situaciones defensivas en oportunidades de victoria.",
                    "Finalmente, se enseñan métodos para evaluar dinámicamente la posición y decidir el momento ideal para atacar o defender.",
                ], en: [
                    "El curso comienza con fundamentos para realizar ataques directos que desestabilicen al oponente y creen oportunidades decisivas.",
                    "Se estudian técnicas de defensa activa que no solo protegen, sino que permiten contraatacar y tomar la iniciativa.",
                    "Aprenderás cuándo y cómo realizar sacrificios estratégicos para obtener ventajas posicionales o materiales.",
                    "Se profundiza en la importancia del contraataque táctico para transformar situaciones defensivas en oportunidades de victoria.",
                    "Finalmente, se enseñan métodos para evaluar dinámicamente la posición y decidir el momento ideal para atacar o defender.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Timing perfecto", en: "Timing perfecto" },
                        description: { es: "Reconocer el momento ideal para acciones tácticas.", en: "Reconocer el momento ideal para acciones tácticas." },
                    },
                    {
                        id: 2,
                        title: { es: "Equilibrio entre ataque y defensa", en: "Equilibrio entre ataque y defensa" },
                        description: { es: "Mantener el control en la partida.", en: "Mantener el control en la partida." },
                    },
                    {
                        id: 3,
                        title: { es: "Sacrificios calculados", en: "Sacrificios calculados" },
                        description: { es: "Maximizar el impacto de tus movimientos.", en: "Maximizar el impacto de tus movimientos." },
                    },
                ],
                detailDescription: { es: [
                    "Este curso te permitirá encontrar el balance entre ser agresivo y prudente, maximizando tus oportunidades de victoria.",
                    "Desarrollarás un sentido agudo para identificar el momento adecuado para lanzar ataques o reforzar la defensa.",
                    "Además, adquirirás la confianza para realizar sacrificios que te proporcionen ventajas duraderas en la partida.",
                ], en: [
                    "Este curso te permitirá encontrar el balance entre ser agresivo y prudente, maximizando tus oportunidades de victoria.",
                    "Desarrollarás un sentido agudo para identificar el momento adecuado para lanzar ataques o reforzar la defensa.",
                    "Además, adquirirás la confianza para realizar sacrificios que te proporcionen ventajas duraderas en la partida.",
                ] },
            },
            authors: [8],
        },
        {
            courseID: 13,
            createdAt: "2025-01-15",
            imageUrl: {
                general: "course-image-full-13_1920x1280_.webp",
                full: "course-image-full-13_1920x1280_.webp",
                thumb: "course-image-thumb-13_640x426_.webp",
            },
            sales: 876,
            title: { es: "Jaque Mate en 1 y 2 Movimientos", en: "Jaque Mate en 1 y 2 Movimientos" },
            shortDescription: { es: "Ejercita y perfecciona mates rápidos para cerrar partidas con estilo.", en: "Ejercita y perfecciona mates rápidos para cerrar partidas con estilo." },
            level: "Principiante",
            price: 10.0,

            detailDescription: { es: "En este curso descubrirás patrones de mates rápidos para sorprender a tu adversario desde las primeras jugadas y cerrar la partida eficazmente.", en: "En este curso descubrirás patrones de mates rápidos para sorprender a tu adversario desde las primeras jugadas y cerrar la partida eficazmente." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Patrones básicos de jaque mate", en: "Patrones básicos de jaque mate" },
                        description: { es: "Formas comunes de dar mate.", en: "Formas comunes de dar mate." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Mate del pasillo", en: "Mate del pasillo" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Mate de la escalera", en: "Mate de la escalera" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Jaque mate en 1 movimiento", en: "Jaque mate en 1 movimiento" },
                        description: { es: "Ejercicios y ejemplos prácticos.", en: "Ejercicios y ejemplos prácticos." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejercicios básicos", en: "Ejercicios básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios avanzados", en: "Ejercicios avanzados" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Jaque mate en 2 movimientos", en: "Jaque mate en 2 movimientos" },
                        description: { es: "Combinaciones y trucos.", en: "Combinaciones y trucos." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejemplos básicos", en: "Ejemplos básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Errores que facilitan mate rápido", en: "Errores que facilitan mate rápido" },
                        description: { es: "Cómo evitarlos.", en: "Cómo evitarlos." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Errores típicos", en: "Errores típicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Prevención", en: "Prevención" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Práctica con problemas tácticos", en: "Práctica con problemas tácticos" },
                        description: { es: "Ejercicios para reforzar habilidades.", en: "Ejercicios para reforzar habilidades." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios avanzados", en: "Ejercicios avanzados" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Se analizan y explican los patrones más comunes para dar jaque mate en 1 y 2 movimientos, incluyendo ejemplos visuales y explicativos.",
                    "El curso ofrece ejercicios prácticos para que los alumnos puedan entrenar y memorizar estos mates rápidos.",
                    "Se identifican errores típicos que facilitan a los rivales dar jaque mate y cómo evitarlos para proteger tu rey.",
                    "Además, se incluyen problemas tácticos que refuerzan la comprensión y aplicación de estos conceptos.",
                ], en: [
                    "Se analizan y explican los patrones más comunes para dar jaque mate en 1 y 2 movimientos, incluyendo ejemplos visuales y explicativos.",
                    "El curso ofrece ejercicios prácticos para que los alumnos puedan entrenar y memorizar estos mates rápidos.",
                    "Se identifican errores típicos que facilitan a los rivales dar jaque mate y cómo evitarlos para proteger tu rey.",
                    "Además, se incluyen problemas tácticos que refuerzan la comprensión y aplicación de estos conceptos.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Reconocimiento de patrones", en: "Reconocimiento de patrones" },
                        description: { es: "Detectar mates rápidos en el tablero.", en: "Detectar mates rápidos en el tablero." },
                    },
                    {
                        id: 2,
                        title: { es: "Velocidad y precisión", en: "Velocidad y precisión" },
                        description: { es: "Ejecutar mates sin errores.", en: "Ejecutar mates sin errores." },
                    },
                ],
                detailDescription: { es: [
                    "Al finalizar, tendrás la capacidad de identificar rápidamente oportunidades para dar jaque mate en 1 o 2 movimientos.",
                    "Mejorarás tu velocidad y precisión para cerrar partidas con movimientos contundentes y efectivos.",
                ], en: [
                    "Al finalizar, tendrás la capacidad de identificar rápidamente oportunidades para dar jaque mate en 1 o 2 movimientos.",
                    "Mejorarás tu velocidad y precisión para cerrar partidas con movimientos contundentes y efectivos.",
                ] },
            },
            authors: [10, 1],
        },
        {
            courseID: 14,
            createdAt: "2024-05-11",
            imageUrl: {
                general: "course-image-full-14_1920x1440_.webp",
                full: "course-image-full-14_1920x1440_.webp",
                thumb: "course-image-thumb-14_640x480_.webp",
            },
            sales: 987,
            title: { es: "Estrategias para el Medio Juego", en: "Estrategias para el Medio Juego" },
            shortDescription: { es: "Aprende a manejar el medio juego con tácticas y planes efectivos.", en: "Aprende a manejar el medio juego con tácticas y planes efectivos." },
            level: "Intermedio",
            price: 18.5,

            detailDescription: { es: "Este curso cubre los fundamentos del medio juego, enfocándose en la toma de decisiones, planificación estratégica y ejecución de tácticas para dominar esta fase vital.", en: "Este curso cubre los fundamentos del medio juego, enfocándose en la toma de decisiones, planificación estratégica y ejecución de tácticas para dominar esta fase vital." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Evaluación de la posición", en: "Evaluación de la posición" },
                        description: { es: "Cómo analizar la estructura y piezas.", en: "Cómo analizar la estructura y piezas." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Factores clave", en: "Factores clave" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos prácticos", en: "Ejemplos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Planes comunes", en: "Planes comunes" },
                        description: { es: "Desarrollo de estrategias según la posición.", en: "Desarrollo de estrategias según la posición." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Planes en flanco de rey", en: "Planes en flanco de rey" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Planes en flanco de dama", en: "Planes en flanco de dama" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Tácticas para el medio juego", en: "Tácticas para el medio juego" },
                        description: { es: "Identificación y aplicación.", en: "Identificación y aplicación." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejercicios básicos", en: "Ejercicios básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios avanzados", en: "Ejercicios avanzados" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Intercambios y transformaciones", en: "Intercambios y transformaciones" },
                        description: { es: "Decidir qué piezas cambiar.", en: "Decidir qué piezas cambiar." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Cuándo cambiar piezas", en: "Cuándo cambiar piezas" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Errores frecuentes", en: "Errores frecuentes" },
                        description: { es: "Evitar fallos típicos en esta fase.", en: "Evitar fallos típicos en esta fase." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Errores comunes", en: "Errores comunes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Cómo evitarlos", en: "Cómo evitarlos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Se enseñan métodos para evaluar correctamente la posición del tablero, considerando factores como estructura de peones y actividad de piezas.",
                    "El curso desarrolla planes estratégicos adaptados a diferentes tipos de posiciones y estilos de juego.",
                    "Se profundiza en la identificación y uso efectivo de tácticas específicas del medio juego, que pueden cambiar el curso de la partida.",
                    "También se aborda la importancia de decidir qué piezas intercambiar y cuándo para mejorar la posición general.",
                    "Finalmente, se analizan errores comunes que pueden costar ventaja o incluso la partida, para que los evites eficazmente.",
                ], en: [
                    "Se enseñan métodos para evaluar correctamente la posición del tablero, considerando factores como estructura de peones y actividad de piezas.",
                    "El curso desarrolla planes estratégicos adaptados a diferentes tipos de posiciones y estilos de juego.",
                    "Se profundiza en la identificación y uso efectivo de tácticas específicas del medio juego, que pueden cambiar el curso de la partida.",
                    "También se aborda la importancia de decidir qué piezas intercambiar y cuándo para mejorar la posición general.",
                    "Finalmente, se analizan errores comunes que pueden costar ventaja o incluso la partida, para que los evites eficazmente.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Toma de decisiones", en: "Toma de decisiones" },
                        description: { es: "Mejorar la elección de jugadas.", en: "Mejorar la elección de jugadas." },
                    },
                    {
                        id: 2,
                        title: { es: "Planificación estratégica", en: "Planificación estratégica" },
                        description: { es: "Diseñar y ejecutar planes coherentes.", en: "Diseñar y ejecutar planes coherentes." },
                    },
                    {
                        id: 3,
                        title: { es: "Precisión táctica", en: "Precisión táctica" },
                        description: { es: "Aplicar tácticas con efectividad.", en: "Aplicar tácticas con efectividad." },
                    },
                ],
                detailDescription: { es: [
                    "Con este curso, mejorarás tu capacidad para decidir la mejor jugada en cada situación del medio juego.",
                    "Aprenderás a planificar de forma estratégica, adaptando tus planes según la evolución de la partida.",
                    "Desarrollarás una mayor precisión en la aplicación de tácticas para aprovechar oportunidades y evitar amenazas.",
                ], en: [
                    "Con este curso, mejorarás tu capacidad para decidir la mejor jugada en cada situación del medio juego.",
                    "Aprenderás a planificar de forma estratégica, adaptando tus planes según la evolución de la partida.",
                    "Desarrollarás una mayor precisión en la aplicación de tácticas para aprovechar oportunidades y evitar amenazas.",
                ] },
            },
            authors: [3],
        },
        {
            courseID: 15,
            createdAt: "2025-04-06",
            imageUrl: {
                general: "course-image-full-15_1920x1280_.webp",
                full: "course-image-full-15_1920x1280_.webp",
                thumb: "course-image-thumb-15_640x426_.webp",
            },
            sales: 1045,
            title: { es: "Entrenamiento de Cálculo", en: "Entrenamiento de Cálculo" },
            shortDescription: { es: "Ejercita tu mente para calcular variantes y mejorar tu juego.", en: "Ejercita tu mente para calcular variantes y mejorar tu juego." },
            level: "Intermedio",
            price: 17.5,

            detailDescription: { es: "Este curso está diseñado para mejorar tu capacidad de cálculo y análisis, clave para prever jugadas y planificar estrategias complejas.", en: "Este curso está diseñado para mejorar tu capacidad de cálculo y análisis, clave para prever jugadas y planificar estrategias complejas." },
            content: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Técnicas de cálculo", en: "Técnicas de cálculo" },
                        description: { es: "Métodos para analizar variantes.", en: "Métodos para analizar variantes." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Método paso a paso", en: "Método paso a paso" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Errores frecuentes", en: "Errores frecuentes" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: { es: "Visualización de movimientos", en: "Visualización de movimientos" },
                        description: { es: "Entrenamiento para ver jugadas futuras.", en: "Entrenamiento para ver jugadas futuras." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejercicios básicos", en: "Ejercicios básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios avanzados", en: "Ejercicios avanzados" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: { es: "Evaluación de posiciones", en: "Evaluación de posiciones" },
                        description: { es: "Decidir el mejor camino a seguir.", en: "Decidir el mejor camino a seguir." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Métodos prácticos", en: "Métodos prácticos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejemplos", en: "Ejemplos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: { es: "Ejercicios prácticos", en: "Ejercicios prácticos" },
                        description: { es: "Problemas para fortalecer la capacidad de cálculo.", en: "Problemas para fortalecer la capacidad de cálculo." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Ejercicios básicos", en: "Ejercicios básicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Ejercicios complejos", en: "Ejercicios complejos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: { es: "Control del error", en: "Control del error" },
                        description: { es: "Reducir errores durante el análisis.", en: "Reducir errores durante el análisis." },
                        content: [
                            {
                                id: 1,
                                title: { es: "Errores típicos", en: "Errores típicos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                            {
                                id: 2,
                                title: { es: "Cómo evitarlos", en: "Cómo evitarlos" },
                                cover: "static-image-muestra-subtemas_1143x547_.webp",
                                video: "video-muestra-subtemas_1920x1080_.mp4",
                            },
                        ],
                    },
                ],
                detailDescription: { es: [
                    "Se enseñan técnicas para calcular variantes de forma estructurada y eficiente, evitando omisiones y errores.",
                    "El curso incluye ejercicios para mejorar la visualización mental de jugadas y posiciones futuras.",
                    "Aprenderás a evaluar posiciones para decidir cuál es la mejor jugada en cada escenario.",
                    "Los ejercicios prácticos están diseñados para fortalecer tu capacidad analítica y la precisión en el cálculo.",
                    "Finalmente, se abordan métodos para minimizar errores durante el análisis y mejorar la confianza en tus decisiones.",
                ], en: [
                    "Se enseñan técnicas para calcular variantes de forma estructurada y eficiente, evitando omisiones y errores.",
                    "El curso incluye ejercicios para mejorar la visualización mental de jugadas y posiciones futuras.",
                    "Aprenderás a evaluar posiciones para decidir cuál es la mejor jugada en cada escenario.",
                    "Los ejercicios prácticos están diseñados para fortalecer tu capacidad analítica y la precisión en el cálculo.",
                    "Finalmente, se abordan métodos para minimizar errores durante el análisis y mejorar la confianza en tus decisiones.",
                ] },
            },
            toLearn: {
                themes: [
                    {
                        id: 1,
                        title: { es: "Cálculo eficiente", en: "Cálculo eficiente" },
                        description: { es: "Mejorar la velocidad y precisión.", en: "Mejorar la velocidad y precisión." },
                    },
                    {
                        id: 2,
                        title: { es: "Visualización mental", en: "Visualización mental" },
                        description: { es: "Fortalecer la capacidad de imaginar jugadas.", en: "Fortalecer la capacidad de imaginar jugadas." },
                    },
                    {
                        id: 3,
                        title: { es: "Reducción de errores", en: "Reducción de errores" },
                        description: { es: "Evitar fallos comunes durante el análisis.", en: "Evitar fallos comunes durante el análisis." },
                    },
                ],
                detailDescription: { es: [
                    "Al terminar el curso, podrás calcular variantes con mayor rapidez y seguridad, mejorando notablemente tu rendimiento en partidas.",
                    "Desarrollarás una visualización mental más clara, anticipando jugadas y respuestas con eficacia.",
                    "Reducirás errores habituales durante el análisis, aumentando la confianza en tus decisiones sobre el tablero.",
                ], en: [
                    "Al terminar el curso, podrás calcular variantes con mayor rapidez y seguridad, mejorando notablemente tu rendimiento en partidas.",
                    "Desarrollarás una visualización mental más clara, anticipando jugadas y respuestas con eficacia.",
                    "Reducirás errores habituales durante el análisis, aumentando la confianza en tus decisiones sobre el tablero.",
                ] },
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
        {
            id: 26,
            idUser: 1,
            idCourse: 14,
            text: "Muy bueno, cumple con lo que promete.",
            createdAt: "16-01-2025",
        },
        {
            id: 27,
            idUser: 6,
            idCourse: 3,
            text: "Fascinante..",
            createdAt: "24-01-2025",
        },
    ],
    opinions: [
        {
            id: 1,
            idUser: 1,
            text: { es: "La plataforma es muy intuitiva y fácil de usar.", en: "The platform is very intuitive and easy to use." },
        },
        {
            id: 2,
            idUser: 3,
            text: { es: "Excelente contenido y seguimiento de progreso.", en: "Excellent content and progress tracking." },
        },
        {
            id: 3,
            idUser: 5,
            text: { es: "Me encanta la variedad de cursos disponibles.", en: "I love the variety of courses available." },
        },
        {
            id: 4,
            idUser: 8,
            text: { es: "Una excelente plataforma para aprender y mejorar tu ajedrez.", en: "An excellent platform to learn and improve your chess." },
        },
        {
            id: 5,
            idUser: 11,
            text: { es: "La sección de análisis post-partida es brillante.", en: "The post-game analysis section is brilliant." },
        },
        {
            id: 6,
            idUser: 6,
            text: { es: "Muy buena para jugadores intermedios.", en: "Very good for intermediate players." },
        },
        {
            id: 7,
            idUser: 2,
            text: { es: "Sería bueno añadir contenido en otros idiomas.", en: "It would be good to add content in other languages." },
        },
        {
            id: 8,
            idUser: 9,
            text: { es: "Los cursos están bien explicados y son útiles.", en: "The courses are well explained and useful." },
        },
        { id: 9, idUser: 12, text: { es: "Excelente relación calidad-precio.", en: "Excellent value for money." } },
        { id: 10, idUser: 7, text: { es: "Fácil de navegar desde el móvil.", en: "Easy to navigate from mobile." } },
    ],
    authors: [
        {
            id: 1,
            name: { es: "Laura Vega", en: "Laura Vega" },
            description: { es: "Gran Maestra con amplia experiencia en preparación de aperturas.", en: "Grandmaster with extensive experience in opening preparation." },
            level: "GM",
            elo: 2550,
            image: "authors-1_640x640_.webp",
        },
        {
            id: 2,
            name: { es: "Carlos Méndez", en: "Carlos Méndez" },
            description: { es: "Experto en finales y entrenador reconocido.", en: "Endgame expert and renowned coach." },
            level: "IM",
            elo: 2400,
            image: "authors-2_640x640_.webp",
        },
        {
            id: 3,
            name: { es: "Pablo Torres", en: "Pablo Torres" },
            description: { es: "Gran Maestro con enfoque posicional. Entrenador de selecciones juveniles.", en: "Grandmaster with a positional approach. Coach of youth national teams." },
            level: "GM",
            elo: 2560,
            image: "authors-3_640x640_.webp",
        },
        {
            id: 4,
            name: { es: "Álvaro Rico", en: "Álvaro Rico" },
            description: { es: "Colaborador y especialista en resolución de estudios tácticos.", en: "Contributor and specialist in solving tactical studies." },
            level: "FM",
            elo: 2322,
            image: "authors-4_640x697_.webp",
        },
        {
            id: 5,
            name: { es: "Jorge Martínez", en: "Jorge Martínez" },
            description: { es: "Entrenador con amplia experiencia en enseñanza a principiantes.", en: "Coach with extensive experience teaching beginners." },
            level: "CM",
            elo: 2200,
            image: "authors-5_640x640_.webp",
        },
        {
            id: 6,
            name: { es: "Ana López", en: "Ana López" },
            description: { es: "Especialista en aperturas y jugadora activa en torneos nacionales.", en: "Openings specialist and active player in national tournaments." },
            level: "FM",
            elo: 2350,
            image: "authors-6_640x640_.webp",
        },
        {
            id: 7,
            name: { es: "Daniel Ruiz", en: "Daniel Ruiz" },
            description: { es: "Jugador fuerte especializado en análisis de partidas de principiantes.", en: "Strong player specialized in analyzing beginners' games." },
            level: "FM",
            elo: 2305,
            image: "authors-7_640x640_.webp",
        },
        {
            id: 8,
            name: { es: "Andrés Martínez", en: "Andrés Martínez" },
            description: { es: "Gran Maestro y entrenador especializado en cálculo táctico.", en: "Grandmaster and coach specialized in tactical calculation." },
            level: "GM",
            elo: 2650,
            image: "authors-8_640x640_.webp",
        },
        {
            id: 9,
            name: { es: "Lucía Fernández", en: "Lucía Fernández" },
            description: { es: "Autora de varios libros de táctica y entrenadora de nivel nacional.", en: "Author of several tactics books and national-level coach." },
            level: "IM",
            elo: 2420,
            image: "authors-9_640x603_.webp",
        },
        {
            id: 10,
            name: { es: "Rafael Ortega", en: "Rafael Ortega" },
            description: { es: "Especialista en tácticas con múltiples títulos internacionales.", en: "Tactics specialist with multiple international titles." },
            level: "GM",
            elo: 2600,
            image: "authors-10_640x640_.webp",
        },
        {
            id: 11,
            name: { es: "Sofía Pérez", en: "Sofía Pérez" },
            description: { es: "Maestra Internacional experta en estrategia y planificación.", en: "International Master and expert in strategy and planning." },
            level: "IM",
            elo: 2450,
            image: "authors-11_640x425_.webp",
        },
        {
            id: 12,
            name: { es: "Laura Sánchez", en: "Laura Sánchez" },
            description: { es: "Psicóloga deportiva y Maestra Internacional femenina.", en: "Sports psychologist and Woman International Master." },
            level: "WIM",
            elo: 2300,
            image: "authors-12_640x637_.webp",
        },
        {
            id: 13,
            name: { es: "Diego Torres", en: "Diego Torres" },
            description: { es: "Jugador y entrenador con amplia experiencia en torneos internacionales.", en: "Player and coach with extensive experience in international tournaments." },
            level: "FM",
            elo: 2370,
            image: "authors-13_640x640_.webp",
        },
        {
            id: 14,
            name: { es: "Patricia Ruiz", en: "Patricia Ruiz" },
            description: { es: "Entrenadora y jugadora con especialización en estrategia dinámica.", en: "Coach and player specialized in dynamic strategy." },
            level: "IM",
            elo: 2420,
            image: "authors-14_640x670_.webp",
        },
        {
            id: 15,
            name: { es: "Juan Ramírez", en: "Juan Ramírez" },
            description: { es: "Coach especializado en enseñanza para principiantes.", en: "Coach specialized in teaching beginners." },
            level: "CM",
            elo: 2150,
            image: "authors-15_640x640_.webp",
        },
        {
            id: 16,
            name: { es: "Marcos Díaz", en: "Marcos Díaz" },
            description: { es: "Jugador y entrenador con experiencia en entrenamiento de medio juego.", en: "Player and coach with experience in middlegame training." },
            level: "IM",
            elo: 2430,
            image: "authors-16_640x640_.webp",
        },
    ],
};
