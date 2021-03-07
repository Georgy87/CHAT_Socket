import { FetchUserLoginType, FetchUserRegistrationType, UserInfo } from "../../store/ducks/user/types";
import { axios } from "../../core";
import { openNotification } from "../../utils/helpers";

export type SignInApiType = {
    status: string;
    user: UserInfo;
    token: string;
}

export const userApi = {
    async getMe() {
        const { data } = await axios.get<UserInfo>("/user/me");
        return data;
    },
    signIn(payload: {
        email: string;
        password: string;
    }) {
        return axios.post<SignInApiType>("/user/signin", payload).then((res) => {
            console.log(res.data);
            if (res.data.status === "success") {
                openNotification({
                    title: 'Отлично!',
                    text: 'Авторизация успешна.',
                    type: 'success',
                });
                return res.data;
            } else {
                openNotification({
                    title: 'Ошибка!',
                    text: "Неверный логин или пароль",
                    type: 'error',
                });
            }
        });
    },
    async signUp(payload: {
        email: string;
        fullname: string;
        password: string;
    }) {
        const data: any = await axios.post("/user/signup", payload);
        if (data.data.status === "success") {
            openNotification({
                title: 'Отлично!',
                text: 'Письмо с подтверждением регистрации отправленно!',
                type: 'success',
            });
        } else {
            openNotification({
                title: 'Ошибка!',
                text: "Регистрация не пройденна",
                type: 'error',
            });
        }
    },
    async verifyHash(hash: string) {
        const data = await axios.get("/user/verify?hash=" + hash);
        console.log(data);
    },
    async findUsers(payload: any) {
        const { data } = await axios.get("/user/find?query=" + payload);
        return data;
    }
};

