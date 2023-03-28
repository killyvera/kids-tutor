/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { FeatureProps } from "./Feature";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyFeaturedProductOverridesProps = {
    MyFeaturedProduct?: PrimitiveOverrideProps<ViewProps>;
    FeaturesGroup1?: PrimitiveOverrideProps<FlexProps>;
    FeaturesImage1?: PrimitiveOverrideProps<ImageProps>;
    frame?: PrimitiveOverrideProps<FlexProps>;
    Feature1?: FeatureProps;
    Feature2?: FeatureProps;
    Feature3?: FeatureProps;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 738863145"?: PrimitiveOverrideProps<FlexProps>;
    "Basic Tee 6-Pack"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat."?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 738863149"?: PrimitiveOverrideProps<FlexProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyFeaturedProductProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MyFeaturedProductOverridesProps | undefined | null;
}>;
export default function MyFeaturedProduct(props: MyFeaturedProductProps): React.ReactElement;
