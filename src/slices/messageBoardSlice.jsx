import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputMessage: "",
  messageArray: [],
};

//createMessage addMessage deleteMessage
export const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: initialState,
  reducers: {
    createMessage: (state, action) => {
      state.inputMessage = action.payload;
    },
    addMessage: (state) => {
      state.messageArray.push(state.inputMessage);
      state.inputMessage = ""; //รีเซ็ตข้อความเมื่อคลิก submit
    },
    deleteMessage: (state, action) => {
      state.messageArray.splice(action.payload, 1);
    },
  },
});

export const { createMessage, addMessage, deleteMessage } =
  messageBoardSlice.actions;

export default messageBoardSlice.reducer;
