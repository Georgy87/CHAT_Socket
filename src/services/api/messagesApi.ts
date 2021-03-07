import { axios } from "../../core";

export const messagesApi = {
    async getAllByDialogId(id: string) {
        return await axios.get("/messages?dialog=" + id);
    },
    send(payload: { value: string, currentDialogId: string }) {
        axios.post("/messages", {
            text: payload.value,
            dialog_id: payload.currentDialogId
        })
    },
    async removeById(id: string) {
        axios.delete("/messages?id=" + id);
    },
};

