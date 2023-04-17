/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlogPost } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyPostOverridesProps = {
    MyPost?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    cover?: PrimitiveOverrideProps<ImageProps>;
    title?: PrimitiveOverrideProps<FlexProps>;
    "New Amplify Studio gives designers the ability to export UI to React code"?: PrimitiveOverrideProps<TextProps>;
    description?: PrimitiveOverrideProps<TextProps>;
    stamp?: PrimitiveOverrideProps<FlexProps>;
    postData?: PrimitiveOverrideProps<FlexProps>;
    author?: PrimitiveOverrideProps<TextProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    link?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    blogPost?: BlogPost;
} & {
    breakpoint?: "large" | "small";
} & {
    overrides?: MyPostOverridesProps | undefined | null;
}>;
export default function MyPost(props: MyPostProps): React.ReactElement;
