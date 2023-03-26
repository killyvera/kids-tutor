/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TestimonialProps } from "./Testimonial";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialsOverridesProps = {
    Testimonials?: PrimitiveOverrideProps<ViewProps>;
    layout?: PrimitiveOverrideProps<FlexProps>;
    Testimonial1?: TestimonialProps;
    Testimonial2?: TestimonialProps;
    Testimonial3?: TestimonialProps;
} & EscapeHatchProps;
export declare type TestimonialsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TestimonialsOverridesProps | undefined | null;
}>;
export default function Testimonials(props: TestimonialsProps): React.ReactElement;
