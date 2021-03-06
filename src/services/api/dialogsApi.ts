import { axios } from "../../core";

export default {
    async getAll() {
        const { data } = await axios.get("/dialogs");
        return data;
    },
    async create({ partner, text }: { partner: string; text: string }) {
        axios.post("/dialogs", { partner, text });
    }
};
