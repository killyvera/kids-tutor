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
  useBreakpointValue, View
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
        Button: { size: "sm" },
        grid: {
          direction: "column",
          width: "100%",
          height: "412px",
          justifyContent: "center",
          padding: "0px 0px 0px 0px",
        },
        "Frame 420": { gap: "29px", width: "100%", height: "974px" },
        HeroResponsive: { width: "100%", height: "1075px" },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    large: "large",
  });
  const rest = { style: { transition: "" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      className='pt-4'
      gap="0"
      direction="column"
      width="100%"
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
        className=""
        style={{
          backgroundImage: "url('/back.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        gap="45px"
        direction="column"
        width="unset"
        height="597px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="70px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Image
          className="hover:scale-x-105 hover:scale-y-105 transition duration-300"
          src="/logoFull.png"
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
          fontFamily="Lato"
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
        <div className="bg-red-400 bg-opacity-10 backdrop-blur-[2px]" >
        <Text
        backgroundColor=""
        borderRadius="3px"
          fontFamily="Lato"
          fontSize="25px"
          fontWeight="500"
          color="white"
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
        </div>
        <>
        <Flex
          className="hover:scale-x-110 hover:scale-y-110 transition duration-300"
          gap="29px"
          direction="row"
          width="892px"
          height="120px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "grid")}
        >
          {/* <Image
            className="hover:scale-x-105 hover:scale-y-105 transition duration-300"
            src="/acreditationImage1.png"
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
            className="hover:scale-x-105 hover:scale-y-105 transition duration-300"
            src="/acreditationImage2.png"
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
            className="hover:scale-x-105 hover:scale-y-105 transition duration-300"
            src="/acreditationImage3.png"
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
          ></Image> */}
          <Button
            className="rounded p-3 text-gray-100"
            width="300px"
            height="unset"
            shrink="0"
            boxShadow="1px 8px 10px rgba(0.32083332538604736, 0.32083332538604736, 0.32083332538604736, 0.5699999928474426)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="¡Obtén los tuyos ahora!"
            {...getOverrideProps(overrides, "Button")}
            marginBottom="40px"
          ></Button>
        </Flex>
        </>
      </Flex>
    </Flex>
  );
}
