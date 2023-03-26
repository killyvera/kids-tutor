/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollegesCreateFormInputValues = {
    name?: string;
    image?: string;
    link?: string;
};
export declare type CollegesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollegesCreateFormOverridesProps = {
    CollegesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollegesCreateFormProps = React.PropsWithChildren<{
    overrides?: CollegesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CollegesCreateFormInputValues) => CollegesCreateFormInputValues;
    onSuccess?: (fields: CollegesCreateFormInputValues) => void;
    onError?: (fields: CollegesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollegesCreateFormInputValues) => CollegesCreateFormInputValues;
    onValidate?: CollegesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CollegesCreateForm(props: CollegesCreateFormProps): React.ReactElement;
