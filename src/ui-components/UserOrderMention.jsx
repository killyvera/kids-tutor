/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function UserOrderMention(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="242px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(162,89,255,1)"
      {...getOverrideProps(overrides, "UserOrderMention")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="189px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12px"
        left="45px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Juana Martinez"
        {...getOverrideProps(overrides, "user")}
      ></Text>
      <Image
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5px"
        left="7px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Avatar")}
      ></Image>
    </View>
  );
}
