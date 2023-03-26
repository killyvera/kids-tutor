/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewProductProps } from "./ReviewProduct";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCollectionOverridesProps = {
    ProductCollection?: PrimitiveOverrideProps<CollectionProps>;
    ReviewProduct?: ReviewProductProps;
} & EscapeHatchProps;
export declare type ProductCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ReviewProductProps;
} & {
    overrides?: ProductCollectionOverridesProps | undefined | null;
}>;
export default function ProductCollection(props: ProductCollectionProps): React.ReactElement;
