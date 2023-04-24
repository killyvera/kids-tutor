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
import { Flex, Image, useBreakpointValue } from "@aws-amplify/ui-react";
export default function MySocialMedia(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Facebook: {},
        "YouTube Logo": {},
        Instagram: {},
        MySocialMedia: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        Facebook: {},
        "YouTube Logo": {},
        Instagram: {},
        MySocialMedia: { width: "87px", height: "26px" },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
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
      gap="9px"
      direction="row"
      width="116px"
      height="41px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "MySocialMedia")}
      {...rest}
    >
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "Facebook")}
      ></Image>
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "YouTube Logo")}
      ></Image>
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "Instagram")}
      ></Image>
    </Flex>
  );
}
