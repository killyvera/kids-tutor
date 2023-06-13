/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OnlinePurchase } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OnlinePurchaseUpdateFormInputValues = {
    details?: string;
};
export declare type OnlinePurchaseUpdateFormValidationValues = {
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OnlinePurchaseUpdateFormOverridesProps = {
    OnlinePurchaseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type OnlinePurchaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: OnlinePurchaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    onlinePurchase?: OnlinePurchase;
    onSubmit?: (fields: OnlinePurchaseUpdateFormInputValues) => OnlinePurchaseUpdateFormInputValues;
    onSuccess?: (fields: OnlinePurchaseUpdateFormInputValues) => void;
    onError?: (fields: OnlinePurchaseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OnlinePurchaseUpdateFormInputValues) => OnlinePurchaseUpdateFormInputValues;
    onValidate?: OnlinePurchaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OnlinePurchaseUpdateForm(props: OnlinePurchaseUpdateFormProps): React.ReactElement;
