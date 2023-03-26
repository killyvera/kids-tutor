/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function OrderListHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1361px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.14000000059604645)"
      borderRadius="3px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(162,89,255,1)"
      {...getOverrideProps(overrides, "OrderListHeader")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="20.573863983154297px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="116px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Order ID"
        {...getOverrideProps(overrides, "orderId")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="20.573863983154297px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="112px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="856px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date"
        {...getOverrideProps(overrides, "date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="20.573863983154297px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="112px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="1027px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Total"
        {...getOverrideProps(overrides, "price")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="20.573863983154297px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="112px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="1220px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Status"
        {...getOverrideProps(overrides, "status")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="20.573863983154297px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="332px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="523px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Address"
        {...getOverrideProps(overrides, "address")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="20.573863983154297px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="270px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17px"
        left="218px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="User"
        {...getOverrideProps(overrides, "user")}
      ></Text>
    </View>
  );
}
