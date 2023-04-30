import axios from "axios";
import { ICardProps } from "@/interfaces/ICard";

const API_URL = "https://644ec5074e86e9a4d800ff6a.mockapi.io";
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
