import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

export const StateContext = React.createContext();

const initialState = {
  Rajat: {
    chats: [{ msg: 'hello', timestamp: '', id: 'rjt-01' }],
    avatar: 'https://api.adorable.io/avatars/285/rajat.png'
  },
  Adam: {
    chats: [{ msg: 'hello R', timestamp: '', id: 'adam-02' }],
    avatar: 'https://api.adorable.io/avatars/285/adam.png'
  }
};

const Store = (props) => {
  const reducerHook = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={reducerHook}>
      {props.children}
    </StateContext.Provider>
  );
};

export default Store;
export const useStateValue = () => useContext(StateContext);
