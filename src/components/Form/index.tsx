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

type Props<T extends FieldValues> = {
    children: ReactNode;
    schema: z.ZodType<T>;
    onSubmit: (data: T, helpers?: { setValue: UseFormSetValue<T> }) => void;
    defaultValues?: DefaultValues<T>;
    classNames?: string[];
};

function Form<T extends FieldValues>({
    children,
    onSubmit,
    schema,
    defaultValues,
    classNames = [],
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
                <form
                    className={[...classNames].join(" ")}
                    onSubmit={handleSubmit(submitHandler)}
                >
                    {children}
                </form>
            </FormProvider>
        </>
    );
}

export default Form;
