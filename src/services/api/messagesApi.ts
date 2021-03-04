import { axios } from "../../core";

export default {
    async getAllByDialogId(id: string) {
        const { data } = await axios.get("/messages?dialog=" + id);
        return data;
    },
    send(text: string, dialogId: string) {
        axios.post("/messages", {
            text: text,
            dialog_id: dialogId
        })
    },
    async removeById(id: string) {
        const { data } = await axios.delete("/messages?id=" + id);
        return data;
    }
};

