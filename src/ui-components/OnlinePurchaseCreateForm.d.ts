/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OnlinePurchaseCreateFormInputValues = {
    details?: string;
};
export declare type OnlinePurchaseCreateFormValidationValues = {
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OnlinePurchaseCreateFormOverridesProps = {
    OnlinePurchaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
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
