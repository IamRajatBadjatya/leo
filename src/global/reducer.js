const reducer = (state, action) => {
    const { timestamp, msg, person } = action.payload;
    switch (action.type) {
      case 'RECEIVE_MESSAGE':
        return {
          ...state,
          [person]: {
           avatar: state[person]['avatar'],
           chats: [...state[person]['chats'], { msg, timestamp }]
          }
        };
      default:
        return state;
    }
  };
export default reducer;