/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyCollegesOverridesProps = {
    MyColleges?: PrimitiveOverrideProps<FlexProps>;
    "Colegios que usan nuestros m\u00E9todos y productos de aprendizaje."?: PrimitiveOverrideProps<TextProps>;
    sliderFrame?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MyCollegesProps = React.PropsWithChildren<Partial<FlexProps> & {
    sliderFrame?: React.ReactNode;
} & {
    breakpoint?: "large";
} & {
    overrides?: MyCollegesOverridesProps | undefined | null;
}>;
export default function MyColleges(props: MyCollegesProps): React.ReactElement;
