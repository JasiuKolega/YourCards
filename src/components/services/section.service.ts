import axios from "axios";
import { ISection } from "@/interfaces/ISection";

const API_URL = "https://643af31070ea0e66028bd3f4.mockapi.io";
axios.defaults.baseURL = API_URL;

export const SectionService = {
  async getAll() {
    const { data } = await axios.get<ISection[]>("/cards");
    return data;
  },
};
