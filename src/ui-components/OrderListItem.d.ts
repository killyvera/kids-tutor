/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Order } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderListItemOverridesProps = {
    OrderListItem?: PrimitiveOverrideProps<ViewProps>;
    orderId?: PrimitiveOverrideProps<TextProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    price?: PrimitiveOverrideProps<TextProps>;
    address?: PrimitiveOverrideProps<TextProps>;
    status?: PrimitiveOverrideProps<ViewProps>;
    user?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type OrderListItemProps = React.PropsWithChildren<Partial<ViewProps> & {
    rectangle1164?: React.ReactNode;
    order?: Order;
    user?: React.ReactNode;
    status?: React.ReactNode;
} & {
    overrides?: OrderListItemOverridesProps | undefined | null;
}>;
export default function OrderListItem(props: OrderListItemProps): React.ReactElement;
