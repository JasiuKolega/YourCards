import axios from "axios";
import { ICardProps } from "@/interfaces/ICard";

const API_URL = "https://643af31070ea0e66028bd3f4.mockapi.io";
axios.defaults.baseURL = API_URL;

export const CardService = {
  async getAll() {
    const { data } = await axios.get<ICardProps[]>("/cards");
    return data;
  },

  async getById(id: string) {
    const { data } = await axios.get<ICardProps[]>("/cards", {
      params: {
        id,
      },
    });
    return data[0];
  },
};
