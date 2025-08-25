import { createBrowserRouter } from "react-router-dom";
import { paths } from "../consts/paths";
import Home from "./Home";
import Layout from "./Layout";
import ErrorElement from "./ErrorElement";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CoursesDetail from "./CoursesDetail";
import Contact from "./Contact";
import Classroom from "./Classroom";
import Login from "./Login";
import Register from "./Register";
import ProtectedLayout from "./ProtectedLayout";
import ProtectedCourse from "./ProtectedCourse";
import CourseExists from "./CourseExists";
import ObtainedCourseClassroom from "./ObtainedCourseClassroom";

export const route = createBrowserRouter([
    {
        path: paths.index,
        errorElement: <ErrorElement />,
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: `/${paths.courses}`, element: <Courses /> },
            {
                path: `/${paths.coursesDetail}`,
                element: <CourseExists />,
                children: [{ index: true, element: <CoursesDetail /> }],
            },
            { path: `/${paths.contact}`, element: <Contact /> },
        ],
    },

    {
        path: `/${paths.dashboard}`,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Dashboard /> }],
    },
    {
        path: `/${paths.class}`,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Classroom /> }],
    },
    {
        path: `/${paths.obtainedCourseClassroom}`,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [
            {
                element: <ProtectedCourse />,
                children: [
                    { index: true, element: <ObtainedCourseClassroom /> },
                ],
            },
        ],
    },

    {
        path: `/${paths.login}`,
        element: <Login />,
        errorElement: <ErrorElement />,
    },
    {
        path: `/${paths.register}`,
        element: <Register />,
        errorElement: <ErrorElement />,
    },
]);
