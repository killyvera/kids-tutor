/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyHeroOneOverridesProps = {
    MyHeroOne?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    p1?: PrimitiveOverrideProps<TextProps>;
    p2?: PrimitiveOverrideProps<TextProps>;
    grid?: PrimitiveOverrideProps<FlexProps>;
    acreditationImage1?: PrimitiveOverrideProps<ImageProps>;
    acreditationImage2?: PrimitiveOverrideProps<ImageProps>;
    acreditationImage3?: PrimitiveOverrideProps<ImageProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MyHeroOneProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MyHeroOneOverridesProps | undefined | null;
}>;
export default function MyHeroOne(props: MyHeroOneProps): React.ReactElement;
