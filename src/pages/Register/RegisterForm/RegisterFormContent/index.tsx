import { useTranslation } from "react-i18next";
import ButtonGroupSelect from "../../../../components/ButtonGroupSelect";
import InputGroup from "../../../../components/InputGroup";
import { CHESS_LEVEL } from "../../../../consts/general";
import { registerSchemaValues } from "../../../../Schemas/registerSchema";
import styles from "./RegisterFormContent.module.css";

/**
 * RegisterFormContent - React component that renders the input fields for the registration form.
 *
 * Features:
 * - Includes inputs for username, password, repeat password, email, and ELO using `InputGroup`.
 * - Provides a selectable title input using `ButtonGroupSelect` with predefined chess levels (`CHESS_LEVEL`).
 * - Handles validation errors and displays error messages for each input field.
 * - Uses CSS modules for styling.
 *
 * Props:
 * - None
 *
 * @returns JSX.Element: The main content of the registration form with all required input fields and selection options.
 */

function RegisterFormContent() {
    const { t } = useTranslation("auth");
    return (
        <div className={styles.formContent}>
            <InputGroup<registerSchemaValues>
                label={t("register.usernameLabel")}
                name="username"
                placeholder={t("register.usernamePlaceholder")}
                errorMsg={true}
            />
            <InputGroup<registerSchemaValues>
                label={t("register.passwordLabel")}
                name="password"
                placeholder={t("register.passwordPlaceholder")}
                errorMsg={true}
                inputType="password"
            />
            <InputGroup<registerSchemaValues>
                label={t("register.repeatPasswordLabel")}
                name="repeatPassword"
                placeholder={t("register.repeatPasswordPlaceholder")}
                errorMsg={true}
                inputType="password"
            />
            <InputGroup<registerSchemaValues>
                label={t("register.emailLabel")}
                name="email"
                placeholder={t("register.emailPlaceholder")}
                errorMsg={true}
            />
            <InputGroup<registerSchemaValues>
                label={t("register.eloLabel")}
                name="elo"
                placeholder={t("register.eloPlaceholder")}
                errorMsg={true}
            />
            <ButtonGroupSelect
                label={t("register.titleLabel")}
                values={[...CHESS_LEVEL]}
                name="title"
                getLabel={(v) =>
                    v === "Sin título" ? t("common:chessTitles.untitled") : v
                }
            />
        </div>
    );
}

export default RegisterFormContent;
