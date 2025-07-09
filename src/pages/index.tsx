import { createBrowserRouter } from "react-router-dom";
import { paths } from "../consts/paths";
import Home from "./Home";
import Layout from "./Layout";
import IsAuthorized from "./IsAutorized";
import ErrorElement from "./ErrorElement";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CoursesDetail from "./Courses/CoursesDetail";
import Contact from "./Contact";
import Classroom from "./Classroom";

export const route = createBrowserRouter([
    {
        path: paths.index,
        errorElement: <ErrorElement />,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: `/${paths.dashboard}`,
                element: <IsAuthorized />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
            {
                path: `/${paths.curses}`,
                element: <Courses />,
            },
            {
                path: `/${paths.cursesDetail}`,
                element: <CoursesDetail />,
            },
            {
                path: `/${paths.contact}`,
                element: <Contact />,
            },
            {
                path: `/${paths.class}`,
                element: <IsAuthorized />,
                children: [
                    {
                        index: true,
                        element: <Classroom />,
                    },
                ],
            },
        ],
    },
    {
        path: `/${paths.login}`,
        element: <>Login</>,
    },
    {
        path: `/${paths.register}`,
        element: <>Register</>,
    },
]);
