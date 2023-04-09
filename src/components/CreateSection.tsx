import React from "react";
import { Box, Text, Center, Button, useDisclosure } from "@chakra-ui/react";
import styles from "../styles/CreateSection.module.scss";
import { AddIcon } from "@chakra-ui/icons";
import { IModal } from "@/interfaces/IModal";
import { AppContext } from "./Context";
import ModalSection from "./ModalSection";

const CreateSection = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [modal, setModal] = React.useState<boolean>(false)

  const onOpenClick = () => {
    setModal(true);
    onOpen();
  }

  return (
      <Box
        className={styles.border}
        height={"228px"}
        width={"430px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          borderRadius={"50%"}
          height={"65px"}
          width={"65px"}
          onClick={onOpenClick}
        >
          <AddIcon />
        </Button>
        <Text color={"grey"} pt={"10px"}>
          Create a new Card!
        </Text>
        {modal ? <ModalSection isOpen={isOpen} onClose={onClose} /> : null}
      </Box>
  );
};

export default CreateSection;
