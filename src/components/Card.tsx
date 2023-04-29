import { Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Center,
  Box,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { ICardProps } from "@/interfaces/ICard";
import { Context } from "./context/Context";
import styles from "../styles/Card.module.scss";

const Cards = ({ word, translate, parent, id }: ICardProps) => {
  return (
    <Box p={"25px"}>
      <Card borderRadius={"17px"} bgColor={"#28282b"}>
        <CardBody>
          <Box borderBottom={"3px solid grey"}>
            <Text fontSize={"20px"}>
              Word: <span className={styles.span}>{word}</span>
            </Text>
          </Box>
          <Box borderBottom={"3px solid grey"} pt={"10px"}>
            <Text fontSize={"20px"}>
              Translate: <span className={styles.span}>{translate}</span>
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Cards;
