import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../consts/paths";
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

/**
 * Defines the application's routing structure using `createBrowserRouter`.
 *
 * Features:
 * - Main layout routes with error handling (Home, Courses, CoursesDetail, Contact).
 * - Protected layouts for authenticated areas (Dashboard, Classroom, ObtainedCourseClassroom).
 * - Nested route structure with components wrapped by protection logic (ProtectedLayout, ProtectedCourse, CourseExists).
 * - Authentication routes (Login, Register) with error handling.
 *
 * Each route includes:
 * - path: URL path for the route.
 * - element: React component to render.
 * - errorElement: Component to render when an error occurs.
 * - children: Optional nested routes for hierarchical routing.
 *
 * @returns BrowserRouter object defining all app routes.
 */

export const route = createBrowserRouter([
    {
        path: PATHS.index,
        errorElement: <ErrorElement />,
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: `/${PATHS.courses}`, element: <Courses /> },
            {
                path: `/${PATHS.coursesDetail}`,
                element: <CourseExists />,
                children: [{ index: true, element: <CoursesDetail /> }],
            },
            { path: `/${PATHS.contact}`, element: <Contact /> },
        ],
    },

    {
        path: `/${PATHS.dashboard}`,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Dashboard /> }],
    },
    {
        path: `/${PATHS.class}`,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Classroom /> }],
    },
    {
        path: `/${PATHS.obtainedCourseClassroom}`,
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
        path: `/${PATHS.login}`,
        element: <Login />,
        errorElement: <ErrorElement />,
    },
    {
        path: `/${PATHS.register}`,
        element: <Register />,
        errorElement: <ErrorElement />,
    },
]);
