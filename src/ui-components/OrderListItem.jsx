/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function OrderListItem(props) {
  const { rectangle1164, order, user, status, overrides, ...rest } = props;
  return (
    <View
      width="1361px"
      height="49px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.03999999910593033)"
      borderRadius="3px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "OrderListItem")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="600"
        color="rgba(104,112,120,1)"
        lineHeight="9.681818008422852px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="177px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19px"
        left="3px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={order?.id}
        {...getOverrideProps(overrides, "orderId")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="13px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="15.732954025268555px"
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
        children={order?.date}
        {...getOverrideProps(overrides, "date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="13px"
        fontWeight="600"
        color="rgba(162,89,255,1)"
        lineHeight="15.732954025268555px"
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
        left="1028px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"$"}${order?.total}${"mxn"}`}
        {...getOverrideProps(overrides, "price")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="334px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19px"
        left="521px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={order?.address}
        {...getOverrideProps(overrides, "address")}
      ></Text>
      <View
        width="165px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="1196px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,240,240,1)"
        children={status}
        {...getOverrideProps(overrides, "status")}
      ></View>
      <View
        width="337px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="184px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,240,240,1)"
        children={user}
        {...getOverrideProps(overrides, "user")}
      ></View>
    </View>
  );
}
