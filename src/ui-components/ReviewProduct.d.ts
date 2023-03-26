/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Product } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewProductOverridesProps = {
    "4"?: PrimitiveOverrideProps<TextProps>;
    ReviewProduct?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    sku?: PrimitiveOverrideProps<TextProps>;
    stock?: PrimitiveOverrideProps<TextProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    description?: PrimitiveOverrideProps<TextProps>;
    extras?: PrimitiveOverrideProps<TextProps>;
    Categories?: PrimitiveOverrideProps<ViewProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating36522836?: PrimitiveOverrideProps<FlexProps>;
    Rating36522837?: PrimitiveOverrideProps<RatingProps>;
    "$250.00mxn"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewProductProps = React.PropsWithChildren<Partial<FlexProps> & {
    product?: Product;
    categories?: React.ReactNode;
} & {
    overrides?: ReviewProductOverridesProps | undefined | null;
}>;
export default function ReviewProduct(props: ReviewProductProps): React.ReactElement;
