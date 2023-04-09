import axios from "axios";
import { ISection } from "@/interfaces/ISection";

const API_URL = 'https://641bf9349b82ded29d5cdf68.mockapi.io';
axios.defaults.baseURL = API_URL;

export const SectionService = {
    async getAll() {
        const { data } = await axios.get<ISection[]>('/sections');
        return data;
    }
};