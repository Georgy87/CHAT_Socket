import userApi from "../../utils/api/user";
import { openNotification } from "../../utils/helpers";
const Actions = {
    setUserData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    fetchUserData: () => dispatch => {
        userApi.getMe().then(({ data }) => {
            dispatch(Actions.setUserData(data));
        });
    },
    fetchUserLogin: postData => dispatch => {
        return userApi.signIn(postData).then(({ data }) => {
            const { status, token } = data;
            if (status === "error") {
                openNotification({
                    title: "Ошибка при авторизации",
                    text: "Неверный логин или пароль",
                    type: "error"
                });
            } else {
                openNotification({
                    title: "Отлично!",
                    text: "Авторизация успешна.",
                    type: "success"
                });
            }
            window.axios.defaults.headers.common["token"] = token;
            window.localStorage["token"] = token;
            dispatch(Actions.fetchUserData());
        })
    },
    fetchUserRegister: postData => dispatch => {
        console.log(postData);
        return userApi.signUp(postData).then(({ data }) => {
            return data;
        });
    }
}

export default Actions;