/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function MyResource(props) {
  const { resources, className, overrides, ...rest } = props;
  const downloadFromCloudOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: resources?.file,
  });
  return (
    <Flex
      gap="6px"
      direction="column"
      width="290px"
      height="270px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="3px"
      padding="6px 6px 6px 6px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MyResource")}
      {...rest}
    >
      <View
        width="279px"
        height="154px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Image
          width="279px"
          height="154px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 77px - 0px)"
          left="calc(50% - 139.5px - 0px)"
          borderRadius="2px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={resources?.cover}
          {...getOverrideProps(overrides, "cover")}
        ></Image>
        <Image
          width="94px"
          height="94px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 47px - 0px)"
          left="calc(50% - 47px - 0px)"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://i.ibb.co/fFZkJ1Z/Download-From-Cloud.png"
          onClick={() => {
            downloadFromCloudOnClick();
          }}
          {...getOverrideProps(overrides, "Download From Cloud")}
        ></Image>
      </View>
      <Text
        fontFamily="Lato"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14.40000057220459px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="14px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={resources?.title}
        {...getOverrideProps(overrides, "title")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="12px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        lineHeight="14.40000057220459px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="70px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={resources?.description}
        {...getOverrideProps(
          overrides,
          "Descripcion del contendido de el Recurso Grati Srartfg errefeutucasLorem impsum retriveve saricus hotominus depecicas carpatinuc cismodeo kelipitus nodfamaus siconoticus estravadelicu intometisa . Noportuses eusteria."
        )}
      ></Text>
    </Flex>
  );
}
