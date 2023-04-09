import { Text, Center, Button, Box } from "@chakra-ui/react";
import CreateSectionStarted from "../CreateSectionStarted";
import DeleteCardStarted from "../DeleteCardStarted";
import SectionStarted from "../SectionStarted";
import styles from "@/styles/GetStarted.module.scss";

const GetStarted = () => {
  return (
    <Center>
      <Box className={styles.guide} p={"50px"} width={"100%"} display={"flex"}>
        <Box className={styles.guidecards} display={'flex'}>
          <Box p={"30px"}>
            <Box border={"2px solid #28282b"} borderRadius={"17px"}>
              <Box p={"10px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  width={"445px"}
                  p={"7px"}
                >
                  <CreateSectionStarted />
                </Box>
              </Box>
              <Center>
                <Text p={"10px"}>You can create cards</Text>
              </Center>
            </Box>
          </Box>
          <Box p={"30px"}>
            <Box border={"2px solid #28282b"} borderRadius={"17px"}>
              <Box p={"10px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  width={"440px"}
                  p={"7px"}
                >
                  <SectionStarted />
                </Box>
              </Box>
              <Center>
                <Text p={"10px"}>You can learn cards</Text>
              </Center>
            </Box>
          </Box>
        </Box>
        <Box p={"30px"} className={styles.guidethird}>
          <Box border={"2px solid #28282b"} borderRadius={"17px"}>
            <Box p={"10px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"440px"}
                p={"7px"}
              >
                <DeleteCardStarted />
              </Box>
            </Box>
            <Center>
              <Text p={"10px"}>You can delete cards</Text>
            </Center>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default GetStarted;
