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
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function MySource(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      variantValues: { breakpoint: "large" },
      overrides: {
        background39323079: {},
        text39323080: {},
        title: {},
        background39323075: {},
        text39353202: {},
        "Pyramid Toy": {},
        Music: {},
        "Circled Play": {},
        "Mommy and Me Classes": {},
        icons: {},
        Button: {},
        content: {},
        card: {},
        MySource: {},
      },
    },
    {
      variantValues: { breakpoint: "small" },
      overrides: {
        background39323079: {},
        text39323080: {},
        title: {},
        background39323075: { height: "199px" },
        text39353202: { height: "66px" },
        "Pyramid Toy": {},
        Music: {},
        "Circled Play": {},
        "Mommy and Me Classes": {},
        icons: {},
        Button: {},
        content: { height: "273px", padding: "0px 6px 122px 6px" },
        card: { height: "323px" },
        MySource: { height: "323px" },
      },
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
    <View
      width="219px"
      height="593px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="11px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MySource")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="218px"
        height="593px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="1px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "card")}
      >
        <View
          width="199px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="7px 7px 0px 0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "title")}
        >
          <View
            width="200px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(64,106,191,1)"
            {...getOverrideProps(overrides, "background39323079")}
          ></View>
          <Text
            fontFamily="Lato"
            fontSize="18px"
            fontWeight="600"
            color="rgba(252,242,233,1)"
            lineHeight="25.799999237060547px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.66px"
            width="199px"
            height="50px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Inglés"
            {...getOverrideProps(overrides, "text39323080")}
          ></Text>
        </View>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="543px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 6px 13px 6px"
          display="flex"
          {...getOverrideProps(overrides, "content")}
        >
          <Image
            width="199px"
            height="371px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="0px 0px 7px 7px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "background39323075")}
          ></Image>
          <Text
            fontFamily="Lato"
            fontSize="15px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="17.299999237060547px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.52px"
            width="182px"
            height="78px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Encuentra contenido de este tema certificado y aprobado con el plan de estudios."
            {...getOverrideProps(overrides, "text39353202")}
          ></Text>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
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
              {...getOverrideProps(overrides, "Pyramid Toy")}
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
              {...getOverrideProps(overrides, "Music")}
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
              {...getOverrideProps(overrides, "Circled Play")}
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
              {...getOverrideProps(overrides, "Mommy and Me Classes")}
            ></Image>
          </Flex>
          <Button
            width="199px"
            height="33px"
            overflow="hidden"
            shrink="0"
            boxShadow="1px 8px 10px rgba(0.32083332538604736, 0.32083332538604736, 0.32083332538604736, 0.5699999928474426)"
            backgroundColor="rgba(64,106,191,1)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="¡Obtén los tuyos ahora!"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </View>
  );
}
