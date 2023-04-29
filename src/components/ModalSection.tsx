import React, { ChangeEvent } from "react";
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
import { IModalProps } from "@/interfaces/IModal";
import axios from "axios";
import { IModalObject } from "@/interfaces/IModal";

const ModalSection = ({ isOpen, onClose }: IModalProps) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [category, setCategory] = React.useState("");
  const [word, setWord] = React.useState("");
  const [translate, setTranslate] = React.useState("");
  const [sentence, setSentence] = React.useState("");

  const getCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const getWord = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const getTranslate = (event: ChangeEvent<HTMLInputElement>) => {
    setTranslate(event.target.value);
  };

  const getSentence = (event: ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  };

  const createSectionObject: IModalObject = {
    word: word,
    translate: translate,
    category: category,
    sentence: sentence,
  };

  const postSection = () => {
    axios.post(
      "https://643af31070ea0e66028bd3f4.mockapi.io/cards",
      createSectionObject
    );
    onClose();
  };

  console.log(category, word, translate, sentence);

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
          <ModalHeader>Create your Section</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input
                value={category}
                onChange={getCategory}
                ref={initialRef}
                placeholder="Category"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Word</FormLabel>
              <Input value={word} onChange={getWord} placeholder="Word" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Translate</FormLabel>
              <Input
                value={translate}
                onChange={getTranslate}
                placeholder="Translate"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Sentence</FormLabel>
              <Input
                value={sentence}
                onChange={getSentence}
                placeholder="Sentence"
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

export default ModalSection;
