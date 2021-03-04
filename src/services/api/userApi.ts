import { FetchUserLoginType, FetchUserRegistrationType, UserInfo } from "../../store/ducks/user/types";
import { axios } from "../../core";

export default {
    async getMe() {
        const { data } = await axios.get<UserInfo>("/user/me");
        return data;
    },
    async signIn({ payload }: FetchUserLoginType) {
        const { data } = await axios.post("/user/signin", payload);
        return data;
    },
    async signUp({ payload }: FetchUserRegistrationType) {
        const { data } = await axios.post("/user/signup", payload);
        return data;
    },
    async verifyHash(hash: any) {
        const { data } = await axios.get("/user/verify?hash=" + hash);
        return data;
    },
    async findUsers(payload: any) {
        const { data } = await axios.get("/user/find?query=" + payload);
        return data;
    }
};

