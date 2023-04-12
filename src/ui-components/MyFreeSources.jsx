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
import { Flex, View, useBreakpointValue } from "@aws-amplify/ui-react";
import MySources from "./MySources";
export default function MyFreeSources(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        MySources39353415: {},
        MySources39353416: {},
        MySources39353417: {},
        resourcesContainer: {},
        container: {},
        MyFreeSources: {},
      },
      variantValues: { breakpoint: "large" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "large",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1047px"
      height="642px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "MyFreeSources")}
      {...rest}
    >
      <View
        width="unset"
        height="767px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "container")}
      >
        <Flex
          gap="26px"
          direction="row"
          width="1047px"
          height="767px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="0.5px"
          left="0px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "resourcesContainer")}
        >
          <MySources
            width="300px"
            height="563px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            breakpoint="large"
            {...getOverrideProps(overrides, "MySources39353415")}
          ></MySources>
          <MySources
            width="300px"
            height="563px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            breakpoint="large"
            {...getOverrideProps(overrides, "MySources39353416")}
          ></MySources>
          <MySources
            width="300px"
            height="563px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            breakpoint="large"
            {...getOverrideProps(overrides, "MySources39353417")}
          ></MySources>
        </Flex>
      </View>
    </Flex>
  );
}
