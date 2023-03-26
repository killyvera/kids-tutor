/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Feature(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="568px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="10px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(64,106,191,1)"
      {...getOverrideProps(overrides, "Feature")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 381")}
      >
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,114,98,1)"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="30px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
            paths={[
              {
                d: "M26.6667 0L3.33333 0C1.48333 0 0 1.5 0 3.33333L0 26.6667C0 28.5 1.48333 30 3.33333 30L26.6667 30C28.5 30 30 28.5 30 26.6667L30 3.33333C30 1.5 28.5 0 26.6667 0ZM26.6667 26.6667L3.33333 26.6667L3.33333 3.33333L26.6667 3.33333L26.6667 26.6667ZM13.3333 23.3333L16.6667 23.3333L16.6667 16.6667L23.3333 16.6667L23.3333 13.3333L16.6667 13.3333L16.6667 6.66667L13.3333 6.66667L13.3333 13.3333L6.66667 13.3333L6.66667 16.6667L13.3333 16.6667L13.3333 23.3333Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 380")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            children="Feature B"
            {...getOverrideProps(overrides, "Feature B")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
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
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
