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
 * Form - A reusable form component using react-hook-form and Zod for validation.
 *
 * @template T - The type of the form values, extending FieldValues.
 * @param children - The form fields or components to render inside the form.
 * @param schema - A Zod schema used for form validation.
 * @param onSubmit - Function called when the form is submitted. Receives the form data and optional helpers.
 * @param defaultValues - Optional default values for the form fields.
 * @param classNames - Optional array of additional CSS class names to apply to the form element.
 * @returns A React element wrapping the children with a validated form.
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
