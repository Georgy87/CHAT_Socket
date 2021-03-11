import { axios } from "../../core";
type GetDialogType = {
    status: string;
    dialogName: string;
}

export default {
    async getAll() {
        const { data } = await axios.get("/dialogs");
        return data;
    },
    createDialog(payload: { partner: string; text: string; partnerName: string }) {
        axios.post("/dialogs", { partner: payload.partner, text: payload.text, partnerName: payload.partnerName });
    },
    createGroupDialog(payload: { partner: string; text: string; nameGroup: string }) {
        axios.post("/dialogs/group", { partner: payload.partner, text: payload.text, groupName: payload.nameGroup});
    },
    async getDialogById(payload: string) {
        const { data } = await axios.get<GetDialogType>(`/dialogs/dialog-info?dialogId=${payload}`);

        return data.dialogName;
    },
};
