/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersCreateFormInputValues = {
    sub_cognito?: string;
    name?: string;
    firstname?: string;
    registration_date?: string;
    direction?: string;
    city?: string;
    state?: string;
    country?: string;
    postal_code?: string;
    purchase_products?: string;
    ratings?: string;
    comments?: string;
    email?: string;
};
export declare type UsersCreateFormValidationValues = {
    sub_cognito?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    firstname?: ValidationFunction<string>;
    registration_date?: ValidationFunction<string>;
    direction?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    postal_code?: ValidationFunction<string>;
    purchase_products?: ValidationFunction<string>;
    ratings?: ValidationFunction<string>;
    comments?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersCreateFormOverridesProps = {
    UsersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sub_cognito?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    registration_date?: PrimitiveOverrideProps<TextFieldProps>;
    direction?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    postal_code?: PrimitiveOverrideProps<TextFieldProps>;
    purchase_products?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ratings?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onSuccess?: (fields: UsersCreateFormInputValues) => void;
    onError?: (fields: UsersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onValidate?: UsersCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersCreateForm(props: UsersCreateFormProps): React.ReactElement;
