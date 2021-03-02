import { DialogsActionType, DialogsInfoType, FetchDialogsType, SetCurrentDialogIdType, SetDialogsType } from "./types";


export const setDialogs = (payload: DialogsInfoType[]): SetDialogsType => {
    return {
        type: DialogsActionType.SET_ITEMS,
        payload
    }
}

export const setCurrentDialogId = (payload: string): SetCurrentDialogIdType => {
    return {
        type: DialogsActionType.SET_CURRENT_DIALOG_ID,
        payload
    }
}

export const fetchDialogsType  = (): FetchDialogsType => {
    return {
        type: DialogsActionType.FETCH_DIALOGS,
    }
}

// const actions = {
//     setDialogs: (items) => ({
//         type: "DIALOGS:SET_ITEMS",
//         payload: items,
//     }),
//     setCurrentDialogId: (id) => ({
//         type: "DIALOGS:SET_CURRENT_DIALOG_ID",
//         payload: id,
//     }),
//     fetchDialogs: () => (dispatch) => {
//         dialogsApi.getAll().then(({ data }) => {
//             console.log(data);
//             dispatch(actions.setDialogs(data));
//         });
//     },
// };
