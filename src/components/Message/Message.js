import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import classes from './Message.module.scss';


const Message = (props) => {

  return (
    <div className={classes.chatLayout}>
    {props.personData.chats.map((chat, i) => (
      <div key={chat.id} style={{ margin: '8px' }}>
        <Chip
          size="medium"
          avatar={
            <Avatar
              src={props.personData.avatar}
            ></Avatar>
          }
          label={chat.msg}
        />
      </div>
    ))}
  </div>
  );
};

export default Message;
