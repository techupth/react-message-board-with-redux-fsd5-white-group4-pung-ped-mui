import { useSelector, useDispatch } from "react-redux";
//import actions
import {
  createMessage,
  addMessage,
  deleteMessage,
} from "../slices/messageBoardSlice";

function MessageBoard() {
  const messageState = useSelector((state) => {
    return state.messageBoard;
  });
  //console.log(messageState);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteMessage(index));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage());
          }}
        >
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              onChange={(e) => dispatch(createMessage(e.target.value))}
              value={messageState.inputMessage}
            />
          </label>
          <button className="submit-message-button">Submit</button>
        </form>
      </div>

      <div className="board">
        <div className="message">
          <h1>"Hello all ! This is the first message."</h1>
          <button
            className="delete-button"
            onClick={() => handleDelete(0)}
            disabled={messageState.messageArray.length === 0}
          >
            x
          </button>
        </div>
        {messageState.messageArray.map((message, index) => {
          return (
            <>
              <div className="message" key={index}>
                <h1>{message}</h1>
                <button
                  className="delete-button"
                  onClick={() => dispatch(deleteMessage(index))}
                >
                  x
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
