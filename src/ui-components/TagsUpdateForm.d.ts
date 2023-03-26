/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Tags } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TagsUpdateFormInputValues = {
    tag_name?: string;
};
export declare type TagsUpdateFormValidationValues = {
    tag_name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagsUpdateFormOverridesProps = {
    TagsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tag_name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TagsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TagsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tags?: Tags;
    onSubmit?: (fields: TagsUpdateFormInputValues) => TagsUpdateFormInputValues;
    onSuccess?: (fields: TagsUpdateFormInputValues) => void;
    onError?: (fields: TagsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TagsUpdateFormInputValues) => TagsUpdateFormInputValues;
    onValidate?: TagsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TagsUpdateForm(props: TagsUpdateFormProps): React.ReactElement;
