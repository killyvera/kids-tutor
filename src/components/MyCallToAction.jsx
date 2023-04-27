import { Button, Flex, Text } from "@aws-amplify/ui-react";
import React from "react";

const MyCallToAction = ({ mainText, secondaryText, buttonLabel }) => {
    return (
        <Flex
            className="mt-9"
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "center", md: "space-between" }}
            px={{ base: "6", md: "10" }}
            py={{ base: "8", md: "16" }}
        >
            <Text
                className=" text-gray-100 mb-7"
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="semibold"
                textAlign={{ base: "center", md: "left" }}
                mb={{ base: "4", md: "0" }}
            >
                {mainText}
            </Text>
            {secondaryText && (
                <Text
                    className=" text-gray-100 mb-7 "
                    fontSize={{ base: "md", md: "xl" }}
                    textAlign={{ base: "center", md: "left" }}
                    mb={{ base: "4", md: "0" }}
                >
                    {secondaryText}
                </Text>
            )}
            {/* <Button
                className="rounded p-1 text-gray-100 hover:scale-x-105 bg-blue-500 hover:bg-blue-700 transition duration-300 mb-14"
                size="large"
                boxShadow="1px 8px 10px rgba(0.32083332538604736, 0.32083332538604736, 0.32083332538604736, 0.5699999928474426)"
                variation="primary"
                ml={{ base: "0", md: "6" }}
                mt={{ base: "6", md: "0" }}
            >
                {buttonLabel}
            </Button> */}
        </Flex>
    );
};

export default MyCallToAction;
