/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Testimonials } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonialsUpdateFormInputValues = {
    content?: string;
    name?: string;
    image?: string;
    location?: string;
    rating?: number;
    email?: string;
};
export declare type TestimonialsUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialsUpdateFormOverridesProps = {
    TestimonialsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonialsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestimonialsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testimonials?: Testimonials;
    onSubmit?: (fields: TestimonialsUpdateFormInputValues) => TestimonialsUpdateFormInputValues;
    onSuccess?: (fields: TestimonialsUpdateFormInputValues) => void;
    onError?: (fields: TestimonialsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestimonialsUpdateFormInputValues) => TestimonialsUpdateFormInputValues;
    onValidate?: TestimonialsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonialsUpdateForm(props: TestimonialsUpdateFormProps): React.ReactElement;
