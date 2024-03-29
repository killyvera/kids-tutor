/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Video } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VideoUpdateFormInputValues = {
    video_id?: string;
    details?: string;
};
export declare type VideoUpdateFormValidationValues = {
    video_id?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoUpdateFormOverridesProps = {
    VideoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    video_id?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type VideoUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    video?: Video;
    onSubmit?: (fields: VideoUpdateFormInputValues) => VideoUpdateFormInputValues;
    onSuccess?: (fields: VideoUpdateFormInputValues) => void;
    onError?: (fields: VideoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoUpdateFormInputValues) => VideoUpdateFormInputValues;
    onValidate?: VideoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoUpdateForm(props: VideoUpdateFormProps): React.ReactElement;
