import axios from "axios";
import { ISection } from "@/interfaces/ISection";

const API_URL = "https://644ec5074e86e9a4d800ff6a.mockapi.io";
axios.defaults.baseURL = API_URL;

export const SectionService = {
  async getAll() {
    const { data } = await axios.get<ISection[]>("/cards");
    return data;
  },
};
