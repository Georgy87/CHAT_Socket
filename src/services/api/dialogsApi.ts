import { axios } from "../../core";

export default {
    async getAll(payload: string) {
        const { data } = await axios.get(`/dialogs?dialogId=${payload}`);
        return data;
    },
    createDialog(payload: { partner: string; text: string; partnerName: string }) {
        axios.post("/dialogs", { partner: payload.partner, text: payload.text, partnerName: payload.partnerName });
    },
    createGroupDialog(payload: { partner: string; text: string; nameGroup: string }) {
        axios.post("/dialogs/group", { partner: payload.partner, text: payload.text, groupName: payload.nameGroup});
    },
};
