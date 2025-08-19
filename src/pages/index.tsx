import { createBrowserRouter } from "react-router-dom";
import { paths } from "../consts/paths";
import Home from "./Home";
import Layout from "./Layout";
import IsAuthorized from "./IsAutorized";
import ErrorElement from "./ErrorElement";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CoursesDetail from "./CoursesDetail";
import Contact from "./Contact";
import Classroom from "./Classroom";
import Login from "./Login";
import Register from "./Register";
import ObtaindeCourseClassroom from "./ObtainedCourseClassroom";

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
                path: `/${paths.courses}`,
                element: <Courses />,
            },
            {
                path: `/${paths.coursesDetail}`,
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
            {
                path: `/${paths.obtainedCourseClassroom}`,
                element: <IsAuthorized />,
                children: [
                    {
                        index: true,
                        element: <ObtaindeCourseClassroom />,
                    },
                ],
            },
        ],
    },
    {
        path: `/${paths.login}`,
        element: <Login />,
    },
    {
        path: `/${paths.register}`,
        element: <Register />,
    },
]);
