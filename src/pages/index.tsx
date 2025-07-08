import { createBrowserRouter } from "react-router-dom";
import { paths } from "../consts/paths";
import Home from "./Home";
import Layout from "./Layout";
import IsAuthorized from "./IsAuthorized";
import ErrorElement from "./ErrorElement";

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
                        element: <>Dashboard</>,
                    },
                ],
            },
            {
                path: `/${paths.curses}`,
                element: <>Curses</>,
            },
            {
                path: `/${paths.cursesDetail}`,
                element: <>CursesDetail</>,
            },
            {
                path: `/${paths.contact}`,
                element: <>Contact</>,
            },
            {
                path: `/${paths.class}`,
                element: <IsAuthorized />,
                children: [
                    {
                        index: true,
                        element: <>Classes</>,
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
