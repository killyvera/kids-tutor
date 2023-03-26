/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
import Feature from "./Feature";
export default function FeaturesPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1588px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "FeaturesPage")}
      {...rest}
    >
      <View
        width="1310px"
        height="610px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="124px"
        left="69px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FeaturesGroup1")}
      >
        <Image
          width="680px"
          height="499px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="56px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          {...getOverrideProps(overrides, "FeaturesImage1")}
        ></Image>
        <Flex
          gap="47px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="17px"
          left="742px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame")}
        >
          <Feature
            display="flex"
            gap="0"
            direction="column"
            width="568px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="10px"
            padding="24px 24px 24px 24px"
            backgroundColor="rgba(64,106,191,1)"
            {...getOverrideProps(overrides, "Feature1")}
          ></Feature>
          <Feature
            display="flex"
            gap="0"
            direction="column"
            width="568px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="10px"
            padding="24px 24px 24px 24px"
            backgroundColor="rgba(64,106,191,1)"
            {...getOverrideProps(overrides, "Feature2")}
          ></Feature>
          <Feature
            display="flex"
            gap="0"
            direction="column"
            width="568px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="10px"
            padding="24px 24px 24px 24px"
            backgroundColor="rgba(64,106,191,1)"
            {...getOverrideProps(overrides, "Feature3")}
          ></Feature>
        </Flex>
      </View>
    </View>
  );
}
