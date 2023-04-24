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
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import formatFecha from "@/helpers/formatDate";

export default function MyPost(props) {
  const { blogPost, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        cover: {},
        "New Amplify Studio gives designers the ability to export UI to React code":
          {},
        title: {},
        description: {},
        author: {},
        date: {},
        postData: {},
        link: {},
        stamp: {},
        Body: {},
        MyPost: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        cover: { width: "100%", height: "unset" },
        "New Amplify Studio gives designers the ability to export UI to React code":
          {},
        title: {},
        description: {},
        author: { fontSize: "14px", letterSpacing: "0px", width: "125.5px" },
        date: { fontSize: "12px", letterSpacing: "0px", width: "125.5px" },
        postData: {
          gap: "0",
          height: "unset",
          justifyContent: "space-between",
          shrink: "0",
          alignSelf: "stretch",
        },
        link: { textAlign: "center", shrink: "0", alignSelf: "stretch" },
        stamp: { direction: "column", height: "68px" },
        Body: { width: "", justifyContent: "center" },
        MyPost: {width:'95%', height: "", padding: "9px 24px 9px 24px" },
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
      gap="16px"
      direction="column"
      width="70%"
      height=""
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="19px 24px 19px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "MyPost")}
      {...rest}
    >
      <Flex
        gap="17px"
        direction="column"
        width=""
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Body")}
      >
        <Image
          width="100%"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={blogPost?.cover}
          {...getOverrideProps(overrides, "cover")}
        ></Image>
        <Flex
          gap="16px"
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
          {...getOverrideProps(overrides, "title")}
        >
          <Text
            fontFamily="Lato"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
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
            children={blogPost?.title}
            {...getOverrideProps(
              overrides,
              "New Amplify Studio gives designers the ability to export UI to React code"
            )}
          ></Text>
        </Flex>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="justify"
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
          children={blogPost?.content}
          {...getOverrideProps(overrides, "description")}
        ></Text>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="29px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "stamp")}
        >
          <Flex
            gap="21px"
            direction="row"
            width="unset"
            height="29px"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "postData")}
          >
            <Text
              fontFamily="Lato"
              fontSize="16px"
              fontWeight="700"
              color="rgba(92,102,112,1)"
              fontStyle="italic"
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
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={blogPost?.author}
              {...getOverrideProps(overrides, "author")}
            ></Text>
            <Text
              fontFamily="Lato"
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
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={formatFecha(blogPost?.createdAt)}
              {...getOverrideProps(overrides, "date")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
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
            children="Ir al Artículo"
            {...getOverrideProps(overrides, "link")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
