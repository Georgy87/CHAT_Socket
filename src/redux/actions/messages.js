import { messagesApi } from "../../utils/api";

const actions = {
    setMessages: (items) => ({
        type: "MESSAGES:SET_ITEMS",
        payload: items,
    }),
    addMessage: message => (dispatch, getState) => {
        const { dialogs } = getState();
        const { currentDialogId } = dialogs;

        if (currentDialogId === message.dialog._id) {
            dispatch({
                type: "MESSAGES:ADD_MESSAGE",
                payload: message
            });
        }
    },
    fetchSendMessage: (text, dialogId) => dispatch => {
        console.log(text, dialogId);
        messagesApi.send(text, dialogId);
    },
    setIsLoading: (bool) => ({
        type: "MESSAGES:SET_IS_LOADING",
        payload: bool,
    }),
    removeMessageById: id => dispatch => {
        messagesApi
            .removeById(id)
            .then(({ data }) => {
                dispatch({
                    type: "MESSAGES:REMOVE_MESSAGE",
                    payload: id
                });
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            });
    },
    fetchMessages: (dialogId) => (dispatch) => {
        dispatch(actions.setIsLoading(true));
        messagesApi
            .getAllByDialogId(dialogId)
            .then(({ data }) => {
                dispatch(actions.setMessages(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            });
    },
};

export default actions;
