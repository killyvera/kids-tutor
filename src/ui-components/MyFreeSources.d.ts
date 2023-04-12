/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { MySourcesProps } from "./MySources";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyFreeSourcesOverridesProps = {
    MyFreeSources?: PrimitiveOverrideProps<FlexProps>;
    container?: PrimitiveOverrideProps<ViewProps>;
    resourcesContainer?: PrimitiveOverrideProps<FlexProps>;
    MySources39353415?: MySourcesProps;
    MySources39353416?: MySourcesProps;
    MySources39353417?: MySourcesProps;
} & EscapeHatchProps;
export declare type MyFreeSourcesProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large";
} & {
    overrides?: MyFreeSourcesOverridesProps | undefined | null;
}>;
export default function MyFreeSources(props: MyFreeSourcesProps): React.ReactElement;
