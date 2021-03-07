import { axios } from "../../core";

export const messagesApi = {
    async getAllByDialogId(id: string) {
        return await axios.get("/messages?dialog=" + id);
    },
    send(payload: { value: string, currentDialogId: string }) {
        axios.post("/messages", {
            value: payload.value,
            dialog_id: payload.currentDialogId
        })
    },
    async removeById(id: string) {
        return await axios.delete("/messages?id=" + id);
    },
};

