/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Colleges } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollegesUpdateFormInputValues = {
    name?: string;
    image?: string;
    link?: string;
    details?: string;
};
export declare type CollegesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollegesUpdateFormOverridesProps = {
    CollegesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CollegesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CollegesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    colleges?: Colleges;
    onSubmit?: (fields: CollegesUpdateFormInputValues) => CollegesUpdateFormInputValues;
    onSuccess?: (fields: CollegesUpdateFormInputValues) => void;
    onError?: (fields: CollegesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollegesUpdateFormInputValues) => CollegesUpdateFormInputValues;
    onValidate?: CollegesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CollegesUpdateForm(props: CollegesUpdateFormProps): React.ReactElement;
