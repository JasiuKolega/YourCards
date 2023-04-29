import React from "react";
import { Box, Text, Center, Button, useDisclosure } from "@chakra-ui/react";
import styles from "../styles/CreateSection.module.scss";
import { AddIcon } from "@chakra-ui/icons";
import ModalCard from "./ModalCard";
import { ICreateCardProps } from "@/interfaces/ICard";

const CreateCard = ({ parent }: ICreateCardProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [modal, setModal] = React.useState<boolean>(false);

  const onOpenClick = () => {
    setModal(true);
    onOpen();
  };

  return (
    <Box
      className={styles.border}
      height={"117px"}
      width={"250px"}
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
        <Box>
          <AddIcon />
        </Box>
      </Button>
      <Text color={"grey"} pt={"10px"}>
        Create a new Card!
      </Text>
      {modal ? (
        <ModalCard isOpen={isOpen} onClose={onClose} parent={parent} />
      ) : null}
    </Box>
  );
};

export default CreateCard;
