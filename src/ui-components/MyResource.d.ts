/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Resources } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyResourceOverridesProps = {
    MyResource?: PrimitiveOverrideProps<FlexProps>;
    "Frame 423"?: PrimitiveOverrideProps<ViewProps>;
    cover?: PrimitiveOverrideProps<ImageProps>;
    "Download From Cloud"?: PrimitiveOverrideProps<ImageProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    "Descripcion del contendido de el Recurso Grati Srartfg errefeutucasLorem impsum retriveve saricus hotominus depecicas carpatinuc cismodeo kelipitus nodfamaus siconoticus estravadelicu intometisa . Noportuses eusteria."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyResourceProps = React.PropsWithChildren<Partial<FlexProps> & {
    resources?: Resources;
} & {
    overrides?: MyResourceOverridesProps | undefined | null;
}>;
export default function MyResource(props: MyResourceProps): React.ReactElement;
