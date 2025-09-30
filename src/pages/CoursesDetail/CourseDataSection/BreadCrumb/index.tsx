import { NavLink } from "react-router-dom";
import { asString, isString } from "../../../../utils/general";
import styles from "./BreadCrumb.module.css";
import {
    BREADCRUMB_DEFAULT_MSG,
    TITLE_DEFAULT_MSG,
} from "../../../../consts/general";
import { PathsType } from "../../../../types/types";
import { PATHS } from "../../../../consts/paths";
import { Fragment } from "react/jsx-runtime";

type BreadCrumbItem = {
    label: string | undefined;
    link?: PathsType;
};

type Props = {
    breadCrumbs: BreadCrumbItem[];
};

/**
 * BreadCrumb - React component that displays a breadcrumb navigation trail.
 *
 * Features:
 * - Iterates through a list of breadcrumb items (`breadCrumbs`) to render navigation hierarchy.
 * - Renders links using `NavLink` when a valid path is provided.
 * - Falls back to default messages (`BREADCRUMB_DEFAULT_MSG`, `TITLE_DEFAULT_MSG`) when labels are missing.
 * - Safely handles undefined or invalid values with utility functions (`asString`, `isString`).
 * - Inserts a ">" separator between breadcrumb items.
 *
 * Props:
 * - `breadCrumbs`: Array of breadcrumb items, each containing:
 *    - `label`: The text to display (string or undefined).
 *    - `link`: Optional path key from `PathsType` to generate navigation links.
 *
 * @returns JSX.Element: A breadcrumb navigation bar with links and separators.
 */

function BreadCrumb({ breadCrumbs }: Props) {
    return (
        <div className={styles.breadcrumb}>
            {breadCrumbs.map((b, i) => {
                return (
                    <Fragment key={i}>
                        {i !== 0 && <span>{">"}</span>}
                        {asString(b.link) ? (
                            <NavLink
                                title={
                                    asString(b.label) || BREADCRUMB_DEFAULT_MSG
                                }
                                to={isString(b.link) ? PATHS[b.link] : ""}
                            >
                                {asString(b.label) || BREADCRUMB_DEFAULT_MSG}
                            </NavLink>
                        ) : (
                            <p>{asString(b.label) || TITLE_DEFAULT_MSG}</p>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
}

export default BreadCrumb;
