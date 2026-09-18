import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import styles from "./LanguageSelector.module.css";
import {
    SUPPORTED_LANGUAGES,
    LANGUAGE_LABELS,
    Language,
    normalizeLanguage,
} from "../../consts/i18n";

type Props = {
    /** Clases extra para posicionar el selector según el contexto (navbar, fijo, etc.). */
    classNames?: string[];
    /** Posición fija (esquina superior derecha) para páginas sin cabecera. */
    fixed?: boolean;
};

/**
 * LanguageSelector - Desplegable accesible para cambiar el idioma de la app.
 *
 * Accesibilidad:
 * - Botón con `aria-haspopup="menu"` y `aria-expanded`.
 * - Opciones con rol `menuitemradio` y `aria-checked` sobre el idioma activo.
 * - Navegable por teclado (flechas, Home/End, Enter/Espacio) y cierre con Escape.
 * - Se cierra al hacer clic fuera y devuelve el foco al botón al cerrarse con teclado.
 *
 * El cambio de idioma se propaga a toda la app vía i18next (`changeLanguage`).
 */
function LanguageSelector({ classNames = [], fixed = false }: Props) {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const current: Language = normalizeLanguage(i18n.resolvedLanguage);

    const containerRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const close = (focusToggle = false): void => {
        setOpen(false);
        if (focusToggle) toggleRef.current?.focus();
    };

    const selectLanguage = (lng: Language): void => {
        void i18n.changeLanguage(lng);
        close(true);
    };

    // Cerrar al hacer clic fuera del selector.
    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e: MouseEvent): void => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onPointerDown);
        return () => document.removeEventListener("mousedown", onPointerDown);
    }, [open]);

    // Al abrir, llevar el foco a la opción del idioma activo.
    useEffect(() => {
        if (!open) return;
        const idx = SUPPORTED_LANGUAGES.indexOf(current);
        optionRefs.current[idx >= 0 ? idx : 0]?.focus();
    }, [open, current]);

    const onMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>): void => {
        const count = SUPPORTED_LANGUAGES.length;
        const activeIdx = optionRefs.current.findIndex(
            (el) => el === document.activeElement
        );
        switch (e.key) {
            case "Escape":
                e.preventDefault();
                close(true);
                break;
            case "ArrowDown":
                e.preventDefault();
                optionRefs.current[(activeIdx + 1) % count]?.focus();
                break;
            case "ArrowUp":
                e.preventDefault();
                optionRefs.current[(activeIdx - 1 + count) % count]?.focus();
                break;
            case "Home":
                e.preventDefault();
                optionRefs.current[0]?.focus();
                break;
            case "End":
                e.preventDefault();
                optionRefs.current[count - 1]?.focus();
                break;
            case "Tab":
                setOpen(false);
                break;
        }
    };

    const onToggleKeyDown = (e: KeyboardEvent<HTMLButtonElement>): void => {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
        }
    };

    return (
        <div
            className={[
                styles.selector,
                fixed ? styles.fixedTopRight : "",
                ...classNames,
            ].join(" ")}
            ref={containerRef}
        >
            <button
                ref={toggleRef}
                type="button"
                className={styles.toggle}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={t("language.selector")}
                onClick={() => setOpen((o) => !o)}
                onKeyDown={onToggleKeyDown}
            >
                <MdLanguage aria-hidden="true" />
                <span className={styles.currentCode}>
                    {current.toUpperCase()}
                </span>
            </button>

            {open && (
                <ul
                    className={styles.menu}
                    role="menu"
                    aria-label={t("language.label")}
                    onKeyDown={onMenuKeyDown}
                >
                    {SUPPORTED_LANGUAGES.map((lng, i) => {
                        const selected = lng === current;
                        return (
                            <li role="none" key={lng}>
                                <button
                                    ref={(el) => {
                                        optionRefs.current[i] = el;
                                    }}
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={selected}
                                    tabIndex={-1}
                                    lang={lng}
                                    className={[
                                        styles.option,
                                        selected ? styles.optionSelected : "",
                                    ].join(" ")}
                                    onClick={() => selectLanguage(lng)}
                                >
                                    {LANGUAGE_LABELS[lng]}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default LanguageSelector;
