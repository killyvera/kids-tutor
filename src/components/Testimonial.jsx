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
  Image,
  Rating,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function Testimonial(props) {
  const { testimonial, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        image: {},
        Rating: {},
        testimonial: {},
        name: {},
        location: {},
        data: {},
        group: {},
        Testimonial: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        image: {},
        Rating: {},
        testimonial: {},
        name: { fontSize: "14px", letterSpacing: "0px" },
        location: { fontSize: "10px", height: "28px" },
        data: { width: "206px", height: "35px", justifyContent: "center" },
        group: {
          gap: "4px",
          width: "252px",
          height: "unset",
          top: "12px",
          left: "8px",
        },
        Testimonial: { width: "268px", height: "207px" },
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
    <View
      width="250px"
      height="278px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="1px 4px 8px rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(252,242,233,1)"
      {...getOverrideProps(overrides, "Testimonial")}
      {...rest}
    >
      <Flex
        gap="17px"
        direction="column"
        width="unset"
        height="240px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="19px"
        left="17px"
        padding="0px 5px 0px 5px"
        display="flex"
        {...getOverrideProps(overrides, "group")}
      >
        <Image
          width="50px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          boxShadow="1px 4px 8px rgba(0, 0, 0, 0.25)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={testimonial?.image}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Rating
        fillColor={"pink"}
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          value={testimonial?.rating}
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="300"
          color="rgba(35,47,62,1)"
          fontStyle="italic"
          lineHeight="18px"
          textAlign="justify"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="207px"
          height="70px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={testimonial?.content}
          {...getOverrideProps(overrides, "testimonial")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="space-between"
          alignItems="flex-end"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "data")}
        >
          <Text
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="206px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={testimonial?.name}
            {...getOverrideProps(overrides, "name")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="14px"
            fontWeight="200"
            color="rgba(0,0,0,1)"
            fontStyle="italic"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="20px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={testimonial?.location}
            {...getOverrideProps(overrides, "location")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
