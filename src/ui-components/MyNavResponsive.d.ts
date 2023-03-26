/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyNavResponsiveOverridesProps = {
    MyNavResponsive?: PrimitiveOverrideProps<FlexProps>;
    components?: PrimitiveOverrideProps<FlexProps>;
    hamburgerContainer?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    logoContainer?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<IconProps>;
    links?: PrimitiveOverrideProps<FlexProps>;
    link38382853?: PrimitiveOverrideProps<TextProps>;
    link38382854?: PrimitiveOverrideProps<TextProps>;
    link38382855?: PrimitiveOverrideProps<TextProps>;
    link38382856?: PrimitiveOverrideProps<TextProps>;
    link38382857?: PrimitiveOverrideProps<TextProps>;
    link38382858?: PrimitiveOverrideProps<TextProps>;
    icons?: PrimitiveOverrideProps<FlexProps>;
    cart?: PrimitiveOverrideProps<ImageProps>;
    user?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MyNavResponsiveProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: MyNavResponsiveOverridesProps | undefined | null;
}>;
export default function MyNavResponsive(props: MyNavResponsiveProps): React.ReactElement;
