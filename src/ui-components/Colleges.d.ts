/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollegesOverridesProps = {
    Colleges?: PrimitiveOverrideProps<ViewProps>;
    "Colegios que usan nuestros m\u00E9todos y productos de aprendizaje."?: PrimitiveOverrideProps<TextProps>;
    "Frame 136"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    logo37672890?: PrimitiveOverrideProps<ImageProps>;
    "Colegio Ciudad de M\u00E9xico"?: PrimitiveOverrideProps<TextProps>;
    "Frame 140"?: PrimitiveOverrideProps<FlexProps>;
    logo37522773?: PrimitiveOverrideProps<ImageProps>;
    "Instituto Kipling"?: PrimitiveOverrideProps<TextProps>;
    "Frame 141"?: PrimitiveOverrideProps<FlexProps>;
    logo37522774?: PrimitiveOverrideProps<ImageProps>;
    "American School Foundation"?: PrimitiveOverrideProps<TextProps>;
    "Frame 142"?: PrimitiveOverrideProps<FlexProps>;
    logo37522775?: PrimitiveOverrideProps<ImageProps>;
    "Greengates School"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CollegesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CollegesOverridesProps | undefined | null;
}>;
export default function Colleges(props: CollegesProps): React.ReactElement;
