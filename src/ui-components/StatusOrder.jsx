/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function StatusOrder(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { status: {}, StatusOrder: {} },
      variantValues: { status: "pending" },
    },
    {
      overrides: {
        status: { left: "calc(50% - 26.5px - -1px)", children: "Dispatch" },
        StatusOrder: { backgroundColor: "rgba(10,207,131,1)" },
      },
      variantValues: { status: "dispatch" },
    },
    {
      overrides: {
        status: { left: "calc(50% - 32.5px - 0px)", children: "Completed" },
        StatusOrder: { backgroundColor: "rgba(104,112,120,1)" },
      },
      variantValues: { status: "completed" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="97px"
      height="34px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,114,98,1)"
      {...getOverrideProps(overrides, "StatusOrder")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 7.5px - -0.5px)"
        left="calc(50% - 24.5px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Pending"
        {...getOverrideProps(overrides, "status")}
      ></Text>
    </View>
  );
}
