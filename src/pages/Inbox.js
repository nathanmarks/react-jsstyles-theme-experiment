import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import {List, ListItem, ListItemText} from '../components/List';
import Avatar from '../components/Avatar';
import Paper from '../components/Paper';
import Divider from '../components/Divider';
import PageTitle from './PageTitle';

export const styleSheet = createStyleSheet('Inbox', () => {
  return {
    example: {
      width: '100%',
    },
  };
});

export default class Inbox extends Component {
  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    const items = [
      {
        from: 'Kekek',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/73.jpg',
        subject: 'Hello Nathan, check out these crazy links! KEK!',
        msg: 'Integer a sagittis felis. Nam eget ullamcorper mi.',
      },
      {
        from: 'xXv1g1l4nt3Xx',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/polovecn/73.jpg',
        subject: 'RE: last time we met at the pit of doom',
        msg: 'Pellentesque habitant morbi tristique senectus et netus ets egestas',
      },
      {
        from: 'Remy',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/73.jpg',
        subject: 'have you seen my mutated children?',
        msg: 'Mauris in elit eu erat tincidunt semper at id sem. Cum sociis natoque',
      },
    ];

    return (
      <div>
        <PageTitle>Inbox</PageTitle>
        <Paper className={classes.example} zDepth={2}>
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>
                <Avatar src={item.avatar} />
                <ListItemText
                  primary={item.subject}
                  secondary={item.msg}
                />
                {index < items.length - 1 && <Divider absolute={true} />}
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}
