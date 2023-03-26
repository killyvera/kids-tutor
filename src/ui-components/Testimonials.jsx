/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Testimonial from "./Testimonial";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Testimonials(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="565px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(230,238,254,1)"
      {...getOverrideProps(overrides, "Testimonials")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="94px"
        left="123px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "layout")}
      >
        <Testimonial
          width="366px"
          height="377px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="29px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Testimonial1")}
        ></Testimonial>
        <Testimonial
          width="366px"
          height="377px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="29px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Testimonial2")}
        ></Testimonial>
        <Testimonial
          width="366px"
          height="377px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="29px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Testimonial3")}
        ></Testimonial>
      </Flex>
    </View>
  );
}
