import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./LoginFormActions.module.css";
import Button from "../../../../components/Button";
import { PATHS } from "../../../../consts/paths";
import { ClipLoader } from "react-spinners";
import { FaUserLock } from "react-icons/fa";

type Props = {
    isPending: boolean;
};

/**
 * LoginFormActions - React component that renders the action buttons for the login form.
 *
 * Features:
 * - Includes a "Volver a inicio" link to navigate back to the home page.
 * - Includes a submit button for logging in, showing a loading spinner (`ClipLoader`) when `isPending` is true.
 * - Displays an icon (`FaUserLock`) next to the submit text when not loading.
 * - Provides a link to the registration page for users without an account.
 * - Uses CSS classes for styling buttons and layout.
 *
 * Props:
 * - `isPending`: Boolean indicating whether the login request is in progress.
 *
 * @returns JSX.Element: A set of form actions including navigation links and a submit button with loading state.
 */

function LoginFormActions({ isPending }: Props) {
    const { t } = useTranslation("auth");
    return (
        <>
            <div className={styles.actions}>
                <div className={styles.actionBtns}>
                    <NavLink
                        className={["button", "buttonSecondary"].join(" ")}
                        to={PATHS.index}
                    >
                        {t("login.backHome")}
                    </NavLink>
                    <Button disabled={isPending} type="submit">
                        {isPending ? (
                            <>
                                <ClipLoader color="white" />
                                {t("login.loading")}
                            </>
                        ) : (
                            <>
                                <FaUserLock />
                                {t("login.submit")}
                            </>
                        )}
                    </Button>
                </div>

                <NavLink className={"linkToLoginSigin"} to={PATHS.register}>
                    {t("login.noAccount")}
                </NavLink>
            </div>
        </>
    );
}

export default LoginFormActions;
