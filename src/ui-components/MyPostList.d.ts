/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyPostProps } from "./MyPost";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyPostListOverridesProps = {
    MyPostList?: PrimitiveOverrideProps<CollectionProps>;
    MyPost?: MyPostProps;
} & EscapeHatchProps;
export declare type MyPostListProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MyPostProps;
} & {
    overrides?: MyPostListOverridesProps | undefined | null;
}>;
export default function MyPostList(props: MyPostListProps): React.ReactElement;
