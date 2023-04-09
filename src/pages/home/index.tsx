import Head from "next/head";
import Home from "@/components/screens/Home";
import { Text, Box } from "@chakra-ui/react";
import { ISectionData } from "@/interfaces/ISection";
import { GetStaticProps, NextPage } from "next";
import { SectionService } from "@/components/services/section.service";
import axios from "axios";
// import { useQuery } from "react-query";

// const fetchCards = async () => {
//   const { data } = await axios.get('https://641bf9349b82ded29d5cdf68.mockapi.io/sections')

//   return data;
// }

const HomePage: NextPage<ISectionData> = ({ sections }) => {
  // const { data } = useQuery("cards", fetchCards);

  // console.log(data);

  return (
    <>
      <Head>
        <title>Home Page | Your Cards</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Home sections={sections} />
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps<ISectionData> = async () => {
  const  sections = await SectionService.getAll();

  return {
    props: { sections },
  }
}

export default HomePage;
