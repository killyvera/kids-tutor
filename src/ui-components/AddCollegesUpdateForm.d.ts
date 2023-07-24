/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AddColleges } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddCollegesUpdateFormInputValues = {
    college?: string;
    details?: string;
};
export declare type AddCollegesUpdateFormValidationValues = {
    college?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddCollegesUpdateFormOverridesProps = {
    AddCollegesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    college?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type AddCollegesUpdateFormProps = React.PropsWithChildren<{
    overrides?: AddCollegesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    addColleges?: AddColleges;
    onSubmit?: (fields: AddCollegesUpdateFormInputValues) => AddCollegesUpdateFormInputValues;
    onSuccess?: (fields: AddCollegesUpdateFormInputValues) => void;
    onError?: (fields: AddCollegesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddCollegesUpdateFormInputValues) => AddCollegesUpdateFormInputValues;
    onValidate?: AddCollegesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AddCollegesUpdateForm(props: AddCollegesUpdateFormProps): React.ReactElement;
