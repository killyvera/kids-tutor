/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MySocialMediaOverridesProps = {
    MySocialMedia?: PrimitiveOverrideProps<FlexProps>;
    Facebook?: PrimitiveOverrideProps<ImageProps>;
    "YouTube Logo"?: PrimitiveOverrideProps<ImageProps>;
    Instagram?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MySocialMediaProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: MySocialMediaOverridesProps | undefined | null;
}>;
export default function MySocialMedia(props: MySocialMediaProps): React.ReactElement;
