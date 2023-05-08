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
export declare type ResourcesCreateFormInputValues = {
    title?: string;
    description?: string;
    files?: string;
    cover?: string;
    autor?: string;
    rating?: number;
    short?: string;
};
export declare type ResourcesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    files?: ValidationFunction<string>;
    cover?: ValidationFunction<string>;
    autor?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    short?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResourcesCreateFormOverridesProps = {
    ResourcesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    files?: PrimitiveOverrideProps<TextAreaFieldProps>;
    cover?: PrimitiveOverrideProps<TextFieldProps>;
    autor?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    short?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResourcesCreateFormProps = React.PropsWithChildren<{
    overrides?: ResourcesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResourcesCreateFormInputValues) => ResourcesCreateFormInputValues;
    onSuccess?: (fields: ResourcesCreateFormInputValues) => void;
    onError?: (fields: ResourcesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResourcesCreateFormInputValues) => ResourcesCreateFormInputValues;
    onValidate?: ResourcesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResourcesCreateForm(props: ResourcesCreateFormProps): React.ReactElement;
