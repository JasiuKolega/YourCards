import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";

const DeleteCardStarted = () => {
  return (
    <Box p={"25px"}>
      <Card
        height={"228px"}
        width={"430px"}
        borderRadius={"17px"}
        bgColor={"#28282b"}
      >
        <CardHeader>
          <Heading size="md">Delete Card</Heading>
        </CardHeader>
        <CardBody>
          <Text>Are you sure? You can't undo this action afterwards.</Text>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"right"}>
          <Button>Cancel</Button>
          <Button ml={'10px'} colorScheme={"red"}>Delete</Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default DeleteCardStarted;
