import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import LanguageSelector from "./index";

const renderSelector = () =>
    render(
        <I18nextProvider i18n={i18n}>
            <LanguageSelector />
        </I18nextProvider>
    );

describe("LanguageSelector", () => {
    beforeEach(async () => {
        await i18n.changeLanguage("es");
    });

    it("muestra el idioma activo y abre el menú accesible al pulsar", async () => {
        const user = userEvent.setup();
        renderSelector();

        const toggle = screen.getByRole("button", { name: /idioma/i });
        expect(toggle).toHaveAttribute("aria-expanded", "false");

        await user.click(toggle);

        expect(toggle).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("menu")).toBeInTheDocument();
        expect(screen.getAllByRole("menuitemradio")).toHaveLength(2);
    });

    it("marca como activa la opción del idioma actual", async () => {
        const user = userEvent.setup();
        renderSelector();

        await user.click(screen.getByRole("button", { name: /idioma/i }));

        const spanish = screen.getByRole("menuitemradio", { name: "Español" });
        expect(spanish).toHaveAttribute("aria-checked", "true");
    });

    it("cambia el idioma de la app al seleccionar una opción", async () => {
        const user = userEvent.setup();
        renderSelector();

        await user.click(screen.getByRole("button", { name: /idioma/i }));
        await user.click(screen.getByRole("menuitemradio", { name: "English" }));

        expect(i18n.language).toBe("en");
    });

    it("cierra el menú con Escape", async () => {
        const user = userEvent.setup();
        renderSelector();

        const toggle = screen.getByRole("button", { name: /idioma/i });
        await user.click(toggle);
        expect(screen.getByRole("menu")).toBeInTheDocument();

        await user.keyboard("{Escape}");
        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
});
