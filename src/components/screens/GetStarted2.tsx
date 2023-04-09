import {
  Box,
  Container,
  Text,
  Center,
  Button,
  background,
} from "@chakra-ui/react";
import GetStartedLayout from "../layout/GetStartedLayout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GetStarted from "./GetStarted";
import styles from '@/styles/GetStarted.module.scss';

const GetStarted2 = () => {
  return (
    <GetStartedLayout>
      <Center className={styles.titleimg}>
        <Box className={styles.maintitle} width={"350px"}>
          <Center mb={"50px"}>
            <Text fontSize={"60px"}>YourCards</Text>
          </Center>
          <Text textAlign={"center"} fontSize={"20px"}>
            YourCards is an app wich you can learn languages by creating cards
            with words.
          </Text>
          <Center pt={"40px"}>
            <Link href={"/home"}>
              <Button
                _hover={{ background: "white", color: "black" }}
                _active={{ background: "#c9c9c9" }}
                borderRadius={0}
                border={"1px solid white"}
                width={"200px"}
                height={"60px"}
              >
                Try YourCards
              </Button>
            </Link>
          </Center>
        </Box>
        <Box className={styles.img} display={"flex"} alignItems={"center"}>
          <Image
            src={"/myapplogo.jpg"}
            alt={"bebra"}
            width={"350"}
            height={"350"}
          />
        </Box>
      </Center>
      <Center pt={"150px"} display={"flex"} flexDirection={"column"}>
        <Text fontSize={"34px"} mb={"40px"}>
          How to use YourCards
        </Text>
        <Text className={styles.howtousetext} fontSize={"18px"}>
          YourCards it's an app in wich you can create cards, learn cards and
          delete them.
        </Text>
        <Box>
          <GetStarted />
        </Box>
      </Center>
      <Center
        display={"flex"}
        justifyContent={"space-around"}
        borderTop={"1px solid grey"}
        bgColor={"#28282b"}
      >
        <Text>Alexandr</Text>
        <Box display={"flex"} flexDirection={"column"} p={"50px"}>
          <Box display={'flex'}>
            <Text p={"15px"}>Follow me on </Text>
            <a
              href="https://www.instagram.com/1__gus_1"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                display: "inline-block",
              }}
            >
              <Text textDecoration={"underline"} textUnderlineOffset={"5px"} p={'15px'} pl={0}>
                instagram
              </Text>
            </a>
          </Box>

          <Text p={"15px"}>My work's email</Text>
          <Text p={"15px"}>buisnes@gmail.com</Text>
        </Box>
      </Center>
      <Center bgColor={"#28282b"}>
        <Text fontSize={"15px"} fontWeight={"300"} opacity={0.5} pb={"20px"}>
          &copy; Alexandr. All rights reserved
        </Text>
      </Center>
    </GetStartedLayout>
  );
};

export default GetStarted2;
