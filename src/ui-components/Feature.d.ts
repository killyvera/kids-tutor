/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureOverridesProps = {
    Feature?: PrimitiveOverrideProps<FlexProps>;
    "Frame 381"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 380"?: PrimitiveOverrideProps<FlexProps>;
    "Feature B"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeatureProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeatureOverridesProps | undefined | null;
}>;
export default function Feature(props: FeatureProps): React.ReactElement;
