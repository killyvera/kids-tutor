/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Rating, Text, View } from "@aws-amplify/ui-react";
export default function Testimonial(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="366px"
      height="377px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="29px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Testimonial")}
      {...rest}
    >
      <Icon
        width="150px"
        height="150px"
        viewBox={{ minX: 0, minY: 0, width: 150, height: 150 }}
        paths={[
          {
            d: "M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29px"
        left="108px"
        {...getOverrideProps(overrides, "Photo")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="300"
        color="rgba(35,47,62,1)"
        fontStyle="italic"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="298px"
        height="70px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="199px"
        left="34px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="“Todo fántastico. Mi hijo se divierte lejos de la tablet y las mates ya no son un problema”."
        {...getOverrideProps(overrides, "testimonial")}
      ></Text>
      <Rating
        width="unset"
        height="unset"
        position="absolute"
        top="325px"
        left="108px"
        size="default"
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="149px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="283px"
        left="35px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Guadalupe Reina"
        {...getOverrideProps(overrides, "name37553000")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="149px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="283px"
        left="184px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Jalisco, México."
        {...getOverrideProps(overrides, "name37563144")}
      ></Text>
    </View>
  );
}
