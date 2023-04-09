// import React from "react";
// import { Text, Box } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import CreateCard from "@/components/CreateCard";
// import Card from "@/components/Card";
// import { Context } from "@/components/context/Context";
// import Head from "next/head";
// import MainLayout from "@/components/layout/MainLayout";
// import {
//   GetServerSideProps,
//   GetStaticPaths,
//   GetStaticProps,
//   NextPage,
// } from "next";
// import { ICardData, ICardDataSingle, ICardProps } from "@/interfaces/ICard";
// import { CardService } from "@/components/services/card.service";
// import { ParsedUrlQuery } from "querystring";

// const CardsPage: NextPage<ICardData> = ({ cards }) => {
//   const idRoute = useRouter().query.id;
//   console.log(cards);

//   return (
//     <MainLayout idRoute={idRoute}>
//       <Head>
//         <title>{idRoute} | Your Cards</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Box display={"flex"} flexWrap={"wrap"}>
//         <>
//           {cards.map(({ word, translate, parent, id }, index) => (
//             <Card
//               id={id}
//               key={index}
//               word={word}
//               translate={translate}
//               parent={parent}
//             />
//           ))}
//           <Box p={"25px"}>
//             <CreateCard parent={idRoute} />
//           </Box>
//         </>
//       </Box>
//     </MainLayout>
//   );
// };


// export const getStaticProps: GetStaticProps<ICardData> = async () => {
//   const cards = await CardService.getAll();

//   return {
//     props: { cards }
//   }
// }

// export default CardsPage;
