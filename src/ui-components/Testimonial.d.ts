/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Testimonials } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialOverridesProps = {
    Testimonial?: PrimitiveOverrideProps<ViewProps>;
    group?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    testimonial?: PrimitiveOverrideProps<TextProps>;
    data?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    location?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TestimonialProps = React.PropsWithChildren<Partial<ViewProps> & {
    testimonials?: Testimonials;
} & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TestimonialOverridesProps | undefined | null;
}>;
export default function Testimonial(props: TestimonialProps): React.ReactElement;
