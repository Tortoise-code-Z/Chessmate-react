import { ReactNode } from "react";
import {
    DefaultValues,
    FieldValues,
    FormProvider,
    useForm,
    UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatedInView } from "../AnimatedInView";
import { AnimatedViewOptions } from "../../types/types";

type Props<T extends FieldValues> = {
    children: ReactNode;
    schema: z.ZodType<T>;
    onSubmit: (data: T, helpers?: { setValue: UseFormSetValue<T> }) => void;
    defaultValues?: DefaultValues<T>;
    classNames?: string[];
    animatedOptions?: AnimatedViewOptions;
};

/**
 * Form component with Zod validation and optional entry animation.
 *
 * - Wraps children in `FormProvider` to enable React Hook Form context.
 * - Validates form data using a Zod schema via `zodResolver`.
 * - Handles form submission and provides `setValue` helper to the `onSubmit` callback.
 * - Supports default values for form fields.
 * - Can be wrapped with `AnimatedInView` to animate the form on entry.
 * - Allows custom CSS classes through `classNames`.
 *
 * Props:
 * - `children` → Form fields or other elements to render inside the form.
 * - `schema` → Zod schema used for form validation.
 * - `onSubmit` → Function called with validated form data and optional helpers.
 * - `defaultValues` → Optional. Initial values for the form fields.
 * - `classNames` → Optional. Array of CSS class names to apply to the `<form>`.
 * - `animatedOptions` → Optional. Animation configuration passed to `AnimatedInView`.
 *
 * @returns A form element managed by React Hook Form, optionally animated on entry.
 */

function Form<T extends FieldValues>({
    children,
    onSubmit,
    schema,
    defaultValues,
    classNames = [],
    animatedOptions,
}: Props<T>) {
    const methods = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const { handleSubmit, setValue } = methods;

    const submitHandler = (data: T) => {
        onSubmit(data, { setValue });
    };

    return (
        <>
            <FormProvider {...methods}>
                {!!animatedOptions ? (
                    <AnimatedInView config={animatedOptions}>
                        <form
                            className={[...classNames].join(" ")}
                            onSubmit={handleSubmit(submitHandler)}
                        >
                            {children}
                        </form>
                    </AnimatedInView>
                ) : (
                    <form
                        className={[...classNames].join(" ")}
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        {children}
                    </form>
                )}
            </FormProvider>
        </>
    );
}

export default Form;
