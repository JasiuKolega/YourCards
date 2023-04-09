import React from "react";
import { Box, Text, Center, Button, useDisclosure } from "@chakra-ui/react";
import styles from "../styles/CreateSection.module.scss";
import { AddIcon } from "@chakra-ui/icons";
import { IModal } from "@/interfaces/IModal";
import { AppContext } from "./Context";
import ModalSection from "./ModalSection";

const CreateSectionStarted = () => {
  return (
    <Box p={'25px'}>
      <Box
        className={styles.border}
        height={"228px"}
        width={"430px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button borderRadius={"50%"} height={"65px"} width={"65px"}>
          <AddIcon />
        </Button>
        <Text color={"grey"} pt={"10px"}>
          Create a new Card!
        </Text>
      </Box>
    </Box>
  );
};

export default CreateSectionStarted;
