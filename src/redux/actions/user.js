import userApi from "../../utils/api/user";
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
        console.log(postData);
        return userApi.login(postData).then(({ data }) => {
            const { status, token } = data;
            window.axios.defaults.headers.common["token"] = token;
            window.localStorage["token"] = token;
            dispatch(Actions.fetchUserData());
        })

    }
}

export default Actions;