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
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function MyNavResponsive(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        image: {},
        hamburgerContainer: {},
        logo: {},
        logoContainer: {},
        link38382853: {},
        link38382854: {},
        link38382855: {},
        link38382856: {},
        link38382857: {},
        link38382858: {},
        links: {},
        cart: {},
        user: {},
        icons: {},
        components: {},
        MyNavResponsive: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        image: {},
        hamburgerContainer: { display: "flex" },
        logo: {},
        logoContainer: {},
        link38382853: {},
        link38382854: {},
        link38382855: {},
        link38382856: {},
        link38382857: {},
        link38382858: {},
        links: { display: "none" },
        cart: {},
        user: { display: "none" },
        icons: {},
        components: {},
        MyNavResponsive: {},
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
      height="60px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="12px 0px 12px 0px"
      backgroundColor="rgba(64,106,191,1)"
      display="flex"
      {...getOverrideProps(overrides, "MyNavResponsive")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="56px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 20px 0px 20px"
        display="flex"
        {...getOverrideProps(overrides, "components")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          display="none"
          {...getOverrideProps(overrides, "hamburgerContainer")}
        >
          <Image
            width="44px"
            height="44px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="flex"
          {...getOverrideProps(overrides, "logoContainer")}
        >
          <Icon
            width="141px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 141, height: 30 }}
            paths={[{ d: "M0 0L141 0L141 30L0 30L0 0Z", fillRule: "nonzero" }]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "logo")}
          ></Icon>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="769px"
          height="36px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 20px 0px 20px"
          display="flex"
          {...getOverrideProps(overrides, "links")}
        >
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "link38382853")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Recursos Gratuitos"
            {...getOverrideProps(overrides, "link38382854")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Comprar"
            {...getOverrideProps(overrides, "link38382855")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="400"
            color="rgba(245,245,245,1)"
            lineHeight="36px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Youtube"
            {...getOverrideProps(overrides, "link38382856")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Blog"
            {...getOverrideProps(overrides, "link38382857")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="36px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contactanos"
            {...getOverrideProps(overrides, "link38382858")}
          ></Text>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "icons")}
        >
          <Image
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "cart")}
          ></Image>
          <Image
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "user")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
