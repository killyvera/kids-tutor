/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderListHeaderOverridesProps = {
    OrderListHeader?: PrimitiveOverrideProps<ViewProps>;
    orderId?: PrimitiveOverrideProps<TextProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    price?: PrimitiveOverrideProps<TextProps>;
    status?: PrimitiveOverrideProps<TextProps>;
    address?: PrimitiveOverrideProps<TextProps>;
    user?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OrderListHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OrderListHeaderOverridesProps | undefined | null;
}>;
export default function OrderListHeader(props: OrderListHeaderProps): React.ReactElement;
