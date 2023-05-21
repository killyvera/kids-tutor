/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users, BlogPost } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommentsCreateFormInputValues = {
    content?: string;
    published_date?: string;
    author?: Users;
    post_id?: BlogPost;
    parent_coment?: string;
    replies?: string;
};
export declare type CommentsCreateFormValidationValues = {
    content?: ValidationFunction<string>;
    published_date?: ValidationFunction<string>;
    author?: ValidationFunction<Users>;
    post_id?: ValidationFunction<BlogPost>;
    parent_coment?: ValidationFunction<string>;
    replies?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentsCreateFormOverridesProps = {
    CommentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    published_date?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<AutocompleteProps>;
    post_id?: PrimitiveOverrideProps<AutocompleteProps>;
    parent_coment?: PrimitiveOverrideProps<TextFieldProps>;
    replies?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentsCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentsCreateFormInputValues) => CommentsCreateFormInputValues;
    onSuccess?: (fields: CommentsCreateFormInputValues) => void;
    onError?: (fields: CommentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentsCreateFormInputValues) => CommentsCreateFormInputValues;
    onValidate?: CommentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentsCreateForm(props: CommentsCreateFormProps): React.ReactElement;
