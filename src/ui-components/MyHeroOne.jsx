/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MyHeroOne(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="101px"
      direction="column"
      width="1440px"
      height="700px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="76px 168px 131px 160px"
      {...getOverrideProps(overrides, "MyHeroOne")}
      {...rest}
    >
      <Flex
        gap="52px"
        direction="column"
        width="1246px"
        height="354px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="127px 14px 0px 11px"
        {...getOverrideProps(overrides, "Main Body")}
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
          fontSize="34px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="56px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Descubre la Educación en diversión con Kids Tutor"
          {...getOverrideProps(overrides, "p1")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="23px"
          fontWeight="600"
          color="rgba(245,245,245,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.19px"
          width="1221px"
          height="85px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="¡Haz que el aprendizaje de tus hijos sea divertido y efectivo hoy mismo! Compra nuestros juegos didácticos y juegos de mesa."
          {...getOverrideProps(overrides, "p2")}
        ></Text>
      </Flex>
      <Flex
        gap="59px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
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
  );
}
