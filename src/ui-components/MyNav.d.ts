/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyNavOverridesProps = {
    MyNav?: PrimitiveOverrideProps<ViewProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    links?: PrimitiveOverrideProps<FlexProps>;
    label38122892?: PrimitiveOverrideProps<TextProps>;
    label38122893?: PrimitiveOverrideProps<TextProps>;
    Comprar?: PrimitiveOverrideProps<TextProps>;
    Youtube?: PrimitiveOverrideProps<TextProps>;
    Blog?: PrimitiveOverrideProps<TextProps>;
    Contactanos?: PrimitiveOverrideProps<TextProps>;
    icons?: PrimitiveOverrideProps<FlexProps>;
    cart?: PrimitiveOverrideProps<ImageProps>;
    user?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MyNavProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MyNavOverridesProps | undefined | null;
}>;
export default function MyNav(props: MyNavProps): React.ReactElement;
