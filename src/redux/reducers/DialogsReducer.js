const ADD_MESSAGE = "Dialogs/ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "Dialogs/UPDATE-NEW-MESSAGE-TEXT"

export const addMessageActionCreator = ({ text, id }) => ({
  type: ADD_MESSAGE,
  id: id,
  message: text,
});

export const onMessageChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

let initialState = {
  Users: [
    { name: "Lilit", id: 1, },
    { name: "Lusine", id: 2, },
  ],
  LilitMessages: [
    { id: 1, message: "Lilit" },
    { id: 2, message: "varam kereq kjsdhfjksd" },
    { id: 3, message: "akjfn jasjdjk axjikner" },
  ],
  LusineMessages: [
    { id: 1, message: "Lusine" },
    { id: 2, message: "Lussss" },
    { id: 3, message: "Lusnyak" },
  ],
  LusinenewMessageText: 'Lusine Value',
}

const DialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      {
        let message = action.message

        return {
          ...state,
          LusineMessages: [...state.LusineMessages, { id: action.id, message: message }],
          LusinenewMessageText: ''
        }
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        LusinenewMessageText: action.newText
      }

    default:
      return state
  }
}
export default DialogsReducer