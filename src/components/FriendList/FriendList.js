import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const FriendList = (props) => {
  const personNames = Object.keys(props.persons);
  return (
    <List component="nav">
      { personNames.map((person) => (
        <ListItem
          onClick={() => props.clicked(person)}
          button
          key={person}
        >
          <ListItemAvatar>
            <Avatar src={props.persons[person]['avatar']}></Avatar>
          </ListItemAvatar>
          <ListItemText primary={person} />
        </ListItem>
      ))}
    </List>
  );
};

export default FriendList;