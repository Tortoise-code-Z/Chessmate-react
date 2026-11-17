import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { useRef, useState } from "react";
import i18n from "../../i18n";
import SecurityRendering from "./index";
import type { WarningMsgType } from "../../types/types";

type HarnessProps = {
    data: string[] | undefined;
    conditions: boolean[] | undefined;
    noCriticalConditions?: boolean[];
    sameState?: boolean;
    msg?: string;
    msgEmpty?: string;
    initial?: WarningMsgType | null;
    onRender?: () => void;
};

/** Tope de renders: si se supera, hay un bucle y el test falla en vez de colgarse. */
const MAX_RENDERS = 20;

/**
 * Padre de prueba: guarda el aviso en su estado (como los componentes reales)
 * y le pasa un objeto `state` nuevo en cada render, igual que ellos.
 */
function Harness({ initial = null, onRender, ...props }: HarnessProps) {
    const [warning, setWarning] = useState<WarningMsgType | null>(initial);
    const renders = useRef(0);
    renders.current += 1;
    if (renders.current > MAX_RENDERS) {
        throw new Error("SecurityRendering: bucle de renders detectado");
    }
    onRender?.();

    return (
        <>
            <SecurityRendering<string>
                {...props}
                state={{ setWarningState: setWarning, warningState: warning }}
            >
                {(item) => <span key={item}>{item}</span>}
            </SecurityRendering>
            <output data-testid="emptyMsg">{warning?.emptyMsg ?? ""}</output>
            <output data-testid="msg">{warning?.msg ?? ""}</output>
        </>
    );
}

const renderHarness = (props: HarnessProps) =>
    render(
        <I18nextProvider i18n={i18n}>
            <Harness {...props} />
        </I18nextProvider>
    );

const emptyMsg = () => screen.getByTestId("emptyMsg").textContent;
const msg = () => screen.getByTestId("msg").textContent;

describe("SecurityRendering", () => {
    const consoleError = vi.spyOn(console, "error");

    beforeEach(async () => {
        await i18n.changeLanguage("es");
        consoleError.mockClear();
    });

    afterEach(() => {
        // Un bucle de renders lo reporta React con "Maximum update depth".
        const loopReported = consoleError.mock.calls.some((args) =>
            String(args[0]).includes("Maximum update depth")
        );
        expect(loopReported).toBe(false);
    });

    it("con data undefined avisa del error sin entrar en bucle", () => {
        let renders = 0;
        renderHarness({
            data: undefined,
            conditions: undefined,
            onRender: () => renders++,
        });

        expect(emptyMsg()).toBe("No se han podido recuperar los datos.");
        expect(msg()).toBe("");
        // Render inicial + uno por fijar el aviso; nada más.
        expect(renders).toBeLessThanOrEqual(2);
    });

    it("no vuelve a escribir el aviso si no cambia al re-renderizar", () => {
        let renders = 0;
        const props: HarnessProps = {
            data: undefined,
            conditions: undefined,
            onRender: () => renders++,
        };
        const { rerender } = renderHarness(props);
        const before = renders;

        rerender(
            <I18nextProvider i18n={i18n}>
                <Harness {...props} />
            </I18nextProvider>
        );

        expect(renders).toBe(before + 1);
    });

    it("con alguna condición en falso muestra el aviso de contenido incompleto", () => {
        renderHarness({ data: ["a", "b"], conditions: [true, false] });

        expect(msg()).toBe(
            "Algún contenido puede estar incompleto. Estamos trabajando en ello para solucionarlo cuanto antes."
        );
        expect(emptyMsg()).toBe("");
        expect(screen.getByText("a")).toBeInTheDocument();
    });

    it("tiene en cuenta las condiciones no críticas", () => {
        renderHarness({
            data: ["a"],
            conditions: [true],
            noCriticalConditions: [false],
            msg: "aviso propio",
        });

        expect(msg()).toBe("aviso propio");
    });

    it("si todo es correcto limpia un aviso previo", () => {
        renderHarness({
            data: ["a"],
            conditions: [true],
            initial: { emptyMsg: undefined, msg: "viejo" },
        });

        expect(msg()).toBe("");
        expect(emptyMsg()).toBe("");
    });

    it("con sameState no pisa un aviso msg que ya existe", () => {
        renderHarness({
            data: undefined,
            conditions: [false],
            sameState: true,
            initial: { emptyMsg: undefined, msg: "de otro componente" },
        });

        expect(msg()).toBe("de otro componente");
        expect(emptyMsg()).toBe("");
    });

    it("con sameState y sin aviso previo pone el de error", () => {
        renderHarness({
            data: undefined,
            conditions: [false],
            sameState: true,
            msgEmpty: "error propio",
        });

        expect(emptyMsg()).toBe("error propio");
    });

    it("con sameState y todo correcto respeta el aviso compartido", () => {
        renderHarness({
            data: ["a"],
            conditions: [true],
            sameState: true,
            initial: { emptyMsg: "de otro componente", msg: undefined },
        });

        expect(emptyMsg()).toBe("de otro componente");
    });

    it("los textos por defecto salen en el idioma activo (en)", async () => {
        await i18n.changeLanguage("en");
        renderHarness({ data: undefined, conditions: undefined });

        expect(emptyMsg()).toBe("Couldn't retrieve the data.");
    });

    it("renderiza emptyNode si no hay datos", () => {
        render(
            <I18nextProvider i18n={i18n}>
                <SecurityRendering<string>
                    data={[]}
                    conditions={[]}
                    emptyNode={<p>vacío</p>}
                >
                    {(item) => <span key={item}>{item}</span>}
                </SecurityRendering>
            </I18nextProvider>
        );

        expect(screen.getByText("vacío")).toBeInTheDocument();
    });
});
