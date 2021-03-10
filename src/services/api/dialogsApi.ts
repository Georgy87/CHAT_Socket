import { axios } from "../../core";

export default {
    async getAll() {
        const { data } = await axios.get("/dialogs");
        return data;
    },
    createDialog(payload: { partner: string; text: string }) {
        axios.post("/dialogs", { partner: payload.partner, text: payload.text });
    },
    createGroupDialog(payload: { partner: string; text: string; nameGroup: string }) {
        axios.post("/dialogs/group", { partner: payload.partner, text: payload.text, groupName: payload.nameGroup});
    },
};
