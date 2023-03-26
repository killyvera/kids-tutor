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
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function HeroResponsive(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        logo: {},
        p1: {},
        p2: {},
        acreditationImage1: {},
        acreditationImage2: {},
        acreditationImage3: {},
        Button: {},
        grid: {},
        "Frame 420": {},
        HeroResponsive: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        logo: {},
        p1: { width: "unset", alignSelf: "stretch" },
        p2: { width: "unset", height: "125px", alignSelf: "stretch" },
        acreditationImage1: {},
        acreditationImage2: {},
        acreditationImage3: {},
        Button: { size: "default" },
        grid: {
          direction: "column",
          width: "300px",
          height: "412px",
          justifyContent: "flex-start",
          padding: "0px 0px 7px 0px",
        },
        "Frame 420": { gap: "29px", width: "300px", height: "974px" },
        HeroResponsive: { width: "320px", height: "1075px" },
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
      gap="0"
      direction="column"
      width="1440px"
      height="702px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroResponsive")}
      {...rest}
    >
      <Flex
        gap="45px"
        direction="column"
        width="unset"
        height="597px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Image
          width="195px"
          height="182px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          {...getOverrideProps(overrides, "logo")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="40.21173095703125px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="783px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Descubre la Educación en diversión con Kids Tutor"
          {...getOverrideProps(overrides, "p1")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(245,245,245,1)"
          lineHeight="33.25407028198242px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.75px"
          width="743px"
          height="75px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="¡Haz que el aprendizaje de tus hijos sea divertido y efectivo hoy mismo! Compra nuestros juegos didácticos y juegos de mesa."
          {...getOverrideProps(overrides, "p2")}
        ></Text>
        <Flex
          gap="29px"
          direction="row"
          width="892px"
          height="91px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "grid")}
        >
          <Image
            width="90px"
            height="90px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            boxShadow="1px 8px 10px rgba(0, 0, 0, 0.25)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "acreditationImage1")}
          ></Image>
          <Image
            width="90px"
            height="90px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            boxShadow="1px 8px 10px rgba(0, 0, 0, 0.25)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "acreditationImage2")}
          ></Image>
          <Image
            width="139px"
            height="90px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            boxShadow="1px 8px 10px rgba(0, 0, 0, 0.25)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "acreditationImage3")}
          ></Image>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            boxShadow="1px 8px 10px rgba(0.32083332538604736, 0.32083332538604736, 0.32083332538604736, 0.5699999928474426)"
            backgroundColor="rgba(64,106,191,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="¡Obtén los tuyos ahora!"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
