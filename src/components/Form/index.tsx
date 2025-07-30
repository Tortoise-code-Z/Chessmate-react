import { ReactNode } from "react";
import {
    DefaultValues,
    FieldValues,
    FormProvider,
    useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Props<T extends FieldValues> = {
    children: ReactNode;
    onSubmit: (data: T) => void;
    schema: z.ZodType<T>;
    defaultValues?: DefaultValues<T>;
};

function Form<T extends FieldValues>({
    children,
    onSubmit,
    schema,
    defaultValues,
}: Props<T>) {
    const methods = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const { handleSubmit } = methods;

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
            </FormProvider>
        </>
    );
}

export default Form;
