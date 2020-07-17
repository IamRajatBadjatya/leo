import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './ChatControls.module.scss';


const ChatControls = (props) => {

  const [msg, changeMsg] = useState();

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      props.sendMessage(e.target.value);
      changeMsg('');
    }
    if (e.keyCode === 13) {
      props.sendMessage(e.target.value);
      changeMsg('');
    }
  };

  return (
    <div className={classes.chatBoxContainer}>
      <TextField
        className={classes.chatBox}
        label="Hit enter to send a message"
        value={msg}
        onChange={(e) => changeMsg(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        onClick={() => { props.sendMessage(msg); changeMsg('')}}
        variant="contained"
        color="primary"
      >
        Send
      </Button>
    </div>
  );
};

export default ChatControls;
