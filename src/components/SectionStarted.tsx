import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Box,
  Text,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { ISection } from "@/interfaces/ISection";
import styles from "../styles/Section.module.scss";
import { EditIcon, ViewIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { robotoSlab } from "./fonts/Font";

const SectionStarted = () => {

  return (
    <Box p={"25px"}>
      <Card width={"430px"} borderRadius={"17px"} bgColor={"#28282b"}>
        <CardHeader
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pb={0}
        >
          <Button>
            <DeleteIcon />
          </Button>
          <Heading size="md" opacity={0.5}>
            <Text className={robotoSlab.className}>start</Text>
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Text
                    className={robotoSlab.className}
                    display={"inline"}
                    fontSize={"14px"}
                    opacity={0.5}
                  >
                    Word:{" "}
                  </Text>
                  <Text className={robotoSlab.className}>
                    <span className={styles.span}>Example</span>
                  </Text>
                </Box>
                {/* <ViewIcon /> */}
              </Heading>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Text
                    className={robotoSlab.className}
                    display={"inline"}
                    fontSize={"14px"}
                    opacity={0.5}
                  >
                    Translate:{" "}
                  </Text>{" "}
                  <Text className={robotoSlab.className}>
                    <span className={styles.span}>Приклад</span>
                  </Text>
                </Box>
                {/* <ViewIcon /> */}
              </Heading>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Text
                    className={robotoSlab.className}
                    display={"inline"}
                    fontSize={"14px"}
                    opacity={0.5}
                  >
                    Sentence:
                  </Text>{" "}
                  <Text className={robotoSlab.className}>
                    <span className={styles.span}>Ця карточка є прикладом</span>
                  </Text>
                </Box>
                {/* <ViewIcon /> */}
              </Heading>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SectionStarted;
