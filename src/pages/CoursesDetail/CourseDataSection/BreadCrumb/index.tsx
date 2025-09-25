import { NavLink } from "react-router-dom";
import { asString, isString } from "../../../../utils/general";
import styles from "./BreadCrumb.module.css";
import {
    BREADCRUMB_DEFAULT_MSG,
    TITLE_DEFAULT_MSG,
} from "../../../../consts/general";
import { PathsType } from "../../../../types/types";
import { PATHS } from "../../../../consts/paths";

type BreadCrumbItem = {
    label: string | undefined;
    link?: PathsType;
};

type Props = {
    breadCrumbs: BreadCrumbItem[];
};

function BreadCrumb({ breadCrumbs }: Props) {
    return (
        <div className={styles.breadcrumb}>
            {breadCrumbs.map((b, i) => {
                return (
                    <>
                        {i !== 0 && <span>{">"}</span>}
                        {asString(b.link) ? (
                            <NavLink
                                title={
                                    asString(b.label) || BREADCRUMB_DEFAULT_MSG
                                }
                                to={
                                    isString(b.link)
                                        ? b.link === "index"
                                            ? PATHS[b.link]
                                            : `/${PATHS[b.link]}`
                                        : ""
                                }
                            >
                                {asString(b.label) || BREADCRUMB_DEFAULT_MSG}
                            </NavLink>
                        ) : (
                            <p>{asString(b.label) || TITLE_DEFAULT_MSG}</p>
                        )}
                    </>
                );
            })}
        </div>
    );
}

export default BreadCrumb;
