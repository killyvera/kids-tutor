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
import {
  Button,
  Flex,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function MyColleges(props) {
  const { sliderFrame, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Colegios que usan nuestros m\u00E9todos y productos de aprendizaje.":
          {},
        sliderFrame: {},
        Button: {},
        MyColleges: {},
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
      gap="50px"
      direction="column"
      width="320px"
      height="625px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="74px 0px 74px 0px"
      backgroundColor="rgba(64,106,191,1)"
      display="flex"
      {...getOverrideProps(overrides, "MyColleges")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="27px"
        fontWeight="600"
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
        children="Colegios que usan nuestros métodos y productos de aprendizaje."
        {...getOverrideProps(
          overrides,
          "Colegios que usan nuestros m\u00E9todos y productos de aprendizaje."
        )}
      ></Text>
      <View
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
        backgroundColor="rgba(217,217,217,1)"
        children={sliderFrame}
        {...getOverrideProps(overrides, "sliderFrame")}
      ></View>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        backgroundColor="rgba(0,34,102,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Integra tu Colegio ahora"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
