import { Container, Box, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { lato } from "../fonts/BetaFont";
import styles from "@/styles/GetStarted.module.scss";
import MenuComponent from "../MenuComponent";

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

const GetStartedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        className={styles.mainlayout}
        display={"flex"}
        alignItems={"center"}
        p={"60px"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <a href="https://portfolio-jasiukolega.vercel.app/" target={"_blank"}>
            <Text
              display={"inline-block"}
              fontSize={"26px"}
              alignItems={"center"}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
            >
              Alexandr
            </Text>
          </a>
        </Box>

        <Box display={'flex'}>
          <Text
            pr={"30px"}
            opacity={0.5}
            fontSize={"18px"}
            className={lato.className}
          >
            beta 1.0
          </Text>
          <Box className={styles.layout}>
            <a
              href="https://portfolio-jasiukolega.vercel.app/works"
              target={"_blank"}
            >
              <Text
                pr={"20px"}
                fontSize={"18px"}
                _hover={{
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                }}
              >
                Projects
              </Text>
            </a>
            <Text
              fontSize={"18px"}
              textDecoration={"underline"}
              textUnderlineOffset={"5px"}
            >
              YourCards
            </Text>
          </Box>
          {/* <Text fontSize={'20px'}>My Company</Text> */}
        </Box>

        <Box className={styles.menu}>
          <MenuComponent />
        </Box>
      </Box>
      <main>{children}</main>
    </>
  );
};

export default GetStartedLayout;
