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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function MyCollege(props) {
  const { colleges, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: { image: {}, name: {}, MyCollege: {} },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        image: { width: "75px", height: "75px", borderRadius: "5px" },
        name: { fontSize: "10px", lineHeight: "15px" },
        MyCollege: { gap: "5px", width: "81px", height: "119px" },
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
  const nameOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: colleges?.link,
  });
  return (
    <Flex
    className="hover:scale-x-105 hover:scale-y-105 transition duration-300"
      gap="22px"
      direction="column"
      width="182px"
      height="263px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor=""
      display="flex"
      {...getOverrideProps(overrides, "MyCollege")}
      {...rest}
    >
      <Image
        width="175px"
        height="175px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        boxShadow="1px 8px 12px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        src={colleges?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily=""
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={colleges?.name}
        onClick={() => {
          nameOnClick();
        }}
        {...getOverrideProps(overrides, "name")}
      ></Text>
    </Flex>
  );
}
