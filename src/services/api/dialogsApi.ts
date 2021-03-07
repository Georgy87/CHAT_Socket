import { axios } from "../../core";

export default {
    async getAll() {
        const { data } = await axios.get("/dialogs");
        return data;
    },
    create(payload: { partner: string; text: string }) {
        axios.post("/dialogs", { partner: payload.partner, text: payload.text });
    }
};
