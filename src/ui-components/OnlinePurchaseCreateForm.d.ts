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
export declare type OnlinePurchaseCreateFormInputValues = {
    customer_name?: string;
    customer_email?: string;
    details?: string;
    uuid?: string;
};
export declare type OnlinePurchaseCreateFormValidationValues = {
    customer_name?: ValidationFunction<string>;
    customer_email?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    uuid?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OnlinePurchaseCreateFormOverridesProps = {
    OnlinePurchaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customer_name?: PrimitiveOverrideProps<TextFieldProps>;
    customer_email?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OnlinePurchaseCreateFormProps = React.PropsWithChildren<{
    overrides?: OnlinePurchaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OnlinePurchaseCreateFormInputValues) => OnlinePurchaseCreateFormInputValues;
    onSuccess?: (fields: OnlinePurchaseCreateFormInputValues) => void;
    onError?: (fields: OnlinePurchaseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OnlinePurchaseCreateFormInputValues) => OnlinePurchaseCreateFormInputValues;
    onValidate?: OnlinePurchaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function OnlinePurchaseCreateForm(props: OnlinePurchaseCreateFormProps): React.ReactElement;
