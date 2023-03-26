/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Colleges } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyCollegeOverridesProps = {
    MyCollege?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyCollegeProps = React.PropsWithChildren<Partial<FlexProps> & {
    colleges?: Colleges;
} & {
    breakpoint?: "large" | "small";
} & {
    overrides?: MyCollegeOverridesProps | undefined | null;
}>;
export default function MyCollege(props: MyCollegeProps): React.ReactElement;
