/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyFooterOverridesProps = {
    MyFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 738"?: PrimitiveOverrideProps<ViewProps>;
    bottomText1?: PrimitiveOverrideProps<TextProps>;
    links?: PrimitiveOverrideProps<FlexProps>;
    linkGroup1?: PrimitiveOverrideProps<FlexProps>;
    link1?: PrimitiveOverrideProps<TextProps>;
    link2?: PrimitiveOverrideProps<TextProps>;
    link3?: PrimitiveOverrideProps<TextProps>;
    link4?: PrimitiveOverrideProps<TextProps>;
    link5?: PrimitiveOverrideProps<TextProps>;
    linkGroup2?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet"?: PrimitiveOverrideProps<TextProps>;
    "Consectetur adipiscing"?: PrimitiveOverrideProps<TextProps>;
    "Elit sed do eiusmod"?: PrimitiveOverrideProps<TextProps>;
    trademark?: PrimitiveOverrideProps<TextProps>;
    subscribe?: PrimitiveOverrideProps<FlexProps>;
    text1?: PrimitiveOverrideProps<TextProps>;
    emailField?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyFooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MyFooterOverridesProps | undefined | null;
}>;
export default function MyFooter(props: MyFooterProps): React.ReactElement;
