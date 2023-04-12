/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Product } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyProductOverridesProps = {
    "4"?: PrimitiveOverrideProps<TextProps>;
    MyProduct?: PrimitiveOverrideProps<FlexProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    carousel39562908?: PrimitiveOverrideProps<ViewProps>;
    carousel39222906?: PrimitiveOverrideProps<ViewProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    sku?: PrimitiveOverrideProps<TextProps>;
    stock?: PrimitiveOverrideProps<TextProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    description?: PrimitiveOverrideProps<TextProps>;
    extras?: PrimitiveOverrideProps<TextProps>;
    Categories?: PrimitiveOverrideProps<ViewProps>;
    marketplaces?: PrimitiveOverrideProps<ViewProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating39222920?: PrimitiveOverrideProps<FlexProps>;
    Rating39222921?: PrimitiveOverrideProps<RatingProps>;
    "$250.00mxn"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyProductProps = React.PropsWithChildren<Partial<FlexProps> & {
    carousel?: React.ReactNode;
    categories?: React.ReactNode;
    marketplaces?: React.ReactNode;
    product?: Product;
} & {
    breakpoint?: "large" | "small";
} & {
    overrides?: MyProductOverridesProps | undefined | null;
}>;
export default function MyProduct(props: MyProductProps): React.ReactElement;
