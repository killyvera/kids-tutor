/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { FeatureProps } from "./Feature";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesPageOverridesProps = {
    FeaturesPage?: PrimitiveOverrideProps<ViewProps>;
    FeaturesGroup1?: PrimitiveOverrideProps<ViewProps>;
    FeaturesImage1?: PrimitiveOverrideProps<ImageProps>;
    frame?: PrimitiveOverrideProps<FlexProps>;
    Feature1?: FeatureProps;
    Feature2?: FeatureProps;
    Feature3?: FeatureProps;
} & EscapeHatchProps;
export declare type FeaturesPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturesPageOverridesProps | undefined | null;
}>;
export default function FeaturesPage(props: FeaturesPageProps): React.ReactElement;
