/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Product, Category } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductUpdateFormInputValues = {
    name?: string;
    description?: string;
    sku?: string;
    price?: number;
    stock?: number;
    dimensions?: string;
    weight?: number;
    rating?: number;
    cover?: string;
    categories?: Category[];
    top?: string;
    bottom?: string;
    front?: string;
    back?: string;
    marketplaces?: string;
    images?: string;
    type?: string;
    tags?: string;
    short?: string;
};
export declare type ProductUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    sku?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    stock?: ValidationFunction<number>;
    dimensions?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
    cover?: ValidationFunction<string>;
    categories?: ValidationFunction<Category>;
    top?: ValidationFunction<string>;
    bottom?: ValidationFunction<string>;
    front?: ValidationFunction<string>;
    back?: ValidationFunction<string>;
    marketplaces?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    short?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductUpdateFormOverridesProps = {
    ProductUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    sku?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    dimensions?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    cover?: PrimitiveOverrideProps<TextFieldProps>;
    categories?: PrimitiveOverrideProps<AutocompleteProps>;
    top?: PrimitiveOverrideProps<TextFieldProps>;
    bottom?: PrimitiveOverrideProps<TextFieldProps>;
    front?: PrimitiveOverrideProps<TextFieldProps>;
    back?: PrimitiveOverrideProps<TextFieldProps>;
    marketplaces?: PrimitiveOverrideProps<TextAreaFieldProps>;
    images?: PrimitiveOverrideProps<TextAreaFieldProps>;
    type?: PrimitiveOverrideProps<TextAreaFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    short?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    product?: Product;
    onSubmit?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onSuccess?: (fields: ProductUpdateFormInputValues) => void;
    onError?: (fields: ProductUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onValidate?: ProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductUpdateForm(props: ProductUpdateFormProps): React.ReactElement;
