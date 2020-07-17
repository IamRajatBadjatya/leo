import React, { useState } from 'react';

import classes from './Dashboard.module.scss';
import FriendList from '../components/FriendList/FriendList';
import ChatControls from '../components/ChatControls/ChatControls';
import Message from '../components/Message/Message';

import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { useStateValue } from '../global/Store';

const Dashboard = (props) => {
  const [persons, dispatch] = useStateValue();
  const personNames = Object.keys(persons);
  const [currentChatPerson, changeCurrentChatPerson] = useState(personNames[0]);

  const sendMessageAction = (msg) => {
    dispatch({
      type: 'RECEIVE_MESSAGE',
      payload: {
        msg,
        timestamp: new Date(),
        person: currentChatPerson,
        id: `${currentChatPerson}-${+new Date()}`
      }
    });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.friendList}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6"> Messaging </Typography>
            </Toolbar>
          </AppBar>
          <FriendList
            persons={persons}
            clicked={(person) => changeCurrentChatPerson(person)}
          ></FriendList>
        </Paper>

        <Paper className={classes.chatWindow}>
          <AppBar color="transparent" position="static">
            <Toolbar>
              <Avatar src={persons[currentChatPerson]['avatar']}></Avatar>
              <Typography variant="h6">{currentChatPerson}</Typography>
            </Toolbar>
          </AppBar>
          <Message personData={persons[currentChatPerson]}></Message>
          <ChatControls
            sendMessage={(msg) => sendMessageAction(msg)}
          ></ChatControls>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
