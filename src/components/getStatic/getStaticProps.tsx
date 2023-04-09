import axios from "axios";
import type { ContextType } from "react";

export const getStaticProps = async (context: any) => {
  const { data } = await axios.get(
    "https://641bf9349b82ded29d5cdf68.mockapi.io/sections"
  );

  return {
    props: { data }
  }
};
