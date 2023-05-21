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
  Divider,
  Flex,
  Rating,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function MyProduct(props) {
  const {
    carousel,
    categories,
    marketplaces,
    product,
    overrides: overridesProp,
    ...restProp
  } = props;
  const variants = [
    {
      variantValues: { breakpoint: "large" },
      overrides: {
        "4": {},
        carousel39222906: {},
        carousel39562908: {},
        sku: {},
        stock: {},
        Frame: {},
        name: {},
        Title: {},
        Divider: {},
        description: {},
        Features: {},
        extras: {},
        Categories: {},
        marketplaces: {},
        Rating39222921: {},
        Rating39222920: {},
        "$250.00mxn": {},
        "Bottom Row": {},
        "Card Area": {},
        "Frame 422": {},
        MyProduct: {},
      },
    },
    {
      variantValues: { breakpoint: "small" },
      overrides: {
        "4": {},
        carousel39222906: { width: "300px" },
        carousel39562908: { width: "300px", height: "300px" },
        sku: { fontSize: "11px" },
        stock: {},
        Frame: {},
        name: {},
        Title: { justifyContent: "center" },
        Divider: {},
        description: {},
        Features: {},
        extras: {},
        Categories: { height: "68px", shrink: "0" },
        marketplaces: { height: "68px", shrink: "0" },
        Rating39222921: { size: "small" },
        Rating39222920: {},
        "$250.00mxn": { fontSize: "19px" },
        "Bottom Row": { height: "unset" },
        "Card Area": {
          width: "300px",
          height: "unset",
          shrink: "1",
          padding: "18px 34px 22px 32px",
          grow: "1",
          basis: "0",
        },
        "Frame 422": { direction: "column", height: "855px" },
        MyProduct: { direction: "column", width: "300px", height: "1112px" },
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
    <Flex
      gap="0"
      direction="row"
      width="993px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "MyProduct")}
      {...rest}
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
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <View
          width="496.5px"
          height="555px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "carousel39562908")}
        >
          <View
            width="496.5px"
            height="555px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(147,162,200,1)"
            children={carousel}
            {...getOverrideProps(overrides, "carousel39222906")}
          ></View>
        </View>
        <Flex
          gap="24px"
          direction="column"
          width="496.5px"
          height="555px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="32px 34px 32px 32px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Card Area")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Title")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={product?.sku}
                {...getOverrideProps(overrides, "sku")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="right"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={`${product?.stock}${" unidades"}`}
                {...getOverrideProps(overrides, "stock")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
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
              children={product?.name}
              {...getOverrideProps(overrides, "name")}
            ></Text>
          </Flex>
          <Divider
            width="unset"
            height="5px"
            display="none"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Features")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={product?.description}
              {...getOverrideProps(overrides, "description")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${product?.dimensions}${"cms"}`}
            {...getOverrideProps(overrides, "extras")}
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
            backgroundColor="rgba(147,162,200,1)"
            {...getOverrideProps(overrides, "Categories")}
          ></View>
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
            backgroundColor="rgba(147,162,200,1)"
            {...getOverrideProps(overrides, "marketplaces")}
          ></View>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="107px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Bottom Row")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Rating39222920")}
            >
              <Rating
                width="unset"
                height="unset"
                shrink="0"
                size="large"
                value={product?.rating}
                {...getOverrideProps(overrides, "Rating39222921")}
              ></Rating>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="22px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                textDecoration="underline"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={product?.rating}
                {...getOverrideProps(overrides, "4")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="27px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="right"
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
              children={`${"$"}${product?.price}${"mxn"}`}
              {...getOverrideProps(overrides, "$250.00mxn")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
