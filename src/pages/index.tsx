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
import ObtainedCourseClassroom from "./ObtainedCourseClassroom";
import ProtectedLayoutAndCourse from "./ProtectedLayoutAndCourse";

/**
 * route - Defines the application's routing structure using React Router's `createBrowserRouter`.
 *
 * Features:
 * - Maps application paths (`PATHS`) to corresponding components.
 * - Provides nested routes for layouts and protected content.
 * - Handles error pages using `ErrorElement` for unmatched routes or loading issues.
 * - Protects specific routes with `ProtectedLayout` and `ProtectedLayoutAndCourse`.
 * - Separates public routes (Home, Contact, Courses, Login, Register) from protected routes (Classroom, CoursesDetail, ObtainedCourseClassroom, Dashboard).
 *
 * @returns BrowserRouter: A configured router object for the React application.
 */

export const route = createBrowserRouter([
    {
        path: PATHS.index,
        errorElement: <ErrorElement />,
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: PATHS.courses, element: <Courses /> },
            { path: PATHS.contact, element: <Contact /> },
        ],
    },

    {
        path: PATHS.class,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Classroom /> }],
    },

    {
        path: PATHS.coursesDetail,
        errorElement: <ErrorElement />,
        element: <ProtectedLayoutAndCourse checkProtectedCourse={false} />,
        children: [{ index: true, element: <CoursesDetail /> }],
    },

    {
        path: PATHS.obtainedCourseClassroom,
        errorElement: <ErrorElement />,
        element: <ProtectedLayoutAndCourse />,
        children: [{ index: true, element: <ObtainedCourseClassroom /> }],
    },

    {
        path: PATHS.dashboard,
        errorElement: <ErrorElement />,
        element: <ProtectedLayout />,
        children: [{ index: true, element: <Dashboard /> }],
    },

    {
        path: PATHS.login,
        errorElement: <ErrorElement />,
        element: <Login />,
    },

    {
        path: PATHS.register,
        errorElement: <ErrorElement />,
        element: <Register />,
    },
]);
