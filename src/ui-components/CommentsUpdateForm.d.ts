/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comments, Users, BlogPost } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommentsUpdateFormInputValues = {
    content?: string;
    published_date?: string;
    author?: Users;
    post_id?: BlogPost;
    parent_coment?: string;
    replies?: string;
    parent_id?: string;
};
export declare type CommentsUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
    published_date?: ValidationFunction<string>;
    author?: ValidationFunction<Users>;
    post_id?: ValidationFunction<BlogPost>;
    parent_coment?: ValidationFunction<string>;
    replies?: ValidationFunction<string>;
    parent_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentsUpdateFormOverridesProps = {
    CommentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    published_date?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<AutocompleteProps>;
    post_id?: PrimitiveOverrideProps<AutocompleteProps>;
    parent_coment?: PrimitiveOverrideProps<TextFieldProps>;
    replies?: PrimitiveOverrideProps<TextFieldProps>;
    parent_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comments?: Comments;
    onSubmit?: (fields: CommentsUpdateFormInputValues) => CommentsUpdateFormInputValues;
    onSuccess?: (fields: CommentsUpdateFormInputValues) => void;
    onError?: (fields: CommentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentsUpdateFormInputValues) => CommentsUpdateFormInputValues;
    onValidate?: CommentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommentsUpdateForm(props: CommentsUpdateFormProps): React.ReactElement;
