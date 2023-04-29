import { Props } from "@/interfaces/ILayout";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

const MainLayout = ({ children, words }: Props) => {
  return (
    <>
      <Box p={"25px"} pb={0} display={"flex"} justifyContent={"space-between"}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link href="/">Your Cards</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href="/home">Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box>
          <Text>Cards: {words}</Text>
        </Box>
      </Box>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
