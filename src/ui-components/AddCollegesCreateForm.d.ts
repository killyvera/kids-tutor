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
export declare type AddCollegesCreateFormInputValues = {
    college?: string;
    details?: string;
};
export declare type AddCollegesCreateFormValidationValues = {
    college?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddCollegesCreateFormOverridesProps = {
    AddCollegesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    college?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type AddCollegesCreateFormProps = React.PropsWithChildren<{
    overrides?: AddCollegesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddCollegesCreateFormInputValues) => AddCollegesCreateFormInputValues;
    onSuccess?: (fields: AddCollegesCreateFormInputValues) => void;
    onError?: (fields: AddCollegesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddCollegesCreateFormInputValues) => AddCollegesCreateFormInputValues;
    onValidate?: AddCollegesCreateFormValidationValues;
} & React.CSSProperties>;
export default function AddCollegesCreateForm(props: AddCollegesCreateFormProps): React.ReactElement;
