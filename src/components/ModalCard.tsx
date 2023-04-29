import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { IModalPropsCard } from "@/interfaces/IModal";
import axios from "axios";
import { IModalObjectCard } from "@/interfaces/IModal";

const ModalCard = ({ isOpen, onClose, parent }: IModalPropsCard) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [word, setWord] = React.useState("");
  const [translate, setTranslate] = React.useState("");

  const getWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const getTranslate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTranslate(event.target.value);
  };

  const createCardObject: IModalObjectCard = {
    parent: parent,
    word: word,
    translate: translate,
  };

  const postSection = () => {
    axios.post(
      "https://641bf9349b82ded29d5cdf68.mockapi.io/cards",
      createCardObject
    );
    onClose();
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Card</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Word</FormLabel>
              <Input
                value={word}
                onChange={getWord}
                ref={initialRef}
                placeholder="Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Translate</FormLabel>
              <Input
                value={translate}
                onChange={getTranslate}
                placeholder="Language"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={postSection}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCard;
