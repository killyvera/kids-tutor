/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MySourceOverridesProps = {
    MySource?: PrimitiveOverrideProps<ViewProps>;
    card?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<ViewProps>;
    background39323079?: PrimitiveOverrideProps<ViewProps>;
    text39323080?: PrimitiveOverrideProps<TextProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    background39323075?: PrimitiveOverrideProps<ImageProps>;
    text39353202?: PrimitiveOverrideProps<TextProps>;
    icons?: PrimitiveOverrideProps<FlexProps>;
    "Pyramid Toy"?: PrimitiveOverrideProps<ImageProps>;
    Music?: PrimitiveOverrideProps<ImageProps>;
    "Circled Play"?: PrimitiveOverrideProps<ImageProps>;
    "Mommy and Me Classes"?: PrimitiveOverrideProps<ImageProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MySourceProps = React.PropsWithChildren<Partial<ViewProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: MySourceOverridesProps | undefined | null;
}>;
export default function MySource(props: MySourceProps): React.ReactElement;
