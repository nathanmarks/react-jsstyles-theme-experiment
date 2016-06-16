import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import {List, ListItem, ListItemText} from '../components/List';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import Paper from '../components/Paper';
import Divider from '../components/Divider';
import Dialog from '../components/Dialog';
import DialogTitle from '../components/Dialog/DialogTitle';
import DialogContent from '../components/Dialog/DialogContent';
import DialogActions from '../components/Dialog/DialogActions';
import DemoContent from '../components/DemoContent';
import PageTitle from './PageTitle';

export const styleSheet = createStyleSheet('Inbox', () => {
  return {
    example: {
      width: '100%',
      fabsolute: {
        position: 'fixed',
        bottom: 20,
        right: 20,
      },
    },
  };
});

export default class Inbox extends Component {
  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  state = {
    dialogOpen: false,
  };

  handleDialogOpen = () => {
    this.setState({dialogOpen: true});
  };

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    const items = [
      {
        from: 'Kekek',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/73.jpg',
        subject: 'Hello Nathan, check out these crazy links!',
        msg: 'Integer a sagittis felis. Nam eget ullamcorper mi.',
      },
      {
        from: 'polovecn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/polovecn/73.jpg',
        subject: 'RE: last time we met at the supermarket',
        msg: 'Pellentesque habitant morbi tristique senectus et netus ets egestas',
      },
      {
        from: 'Remy',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/73.jpg',
        subject: 'Proin quis velit ut libero aliquam?',
        msg: 'Mauris in elit eu erat tincidunt semper at id sem. Cum sociis natoque',
      },
    ];

    return (
      <div className={classes.example}>
        <PageTitle>Inbox</PageTitle>
        <Paper zDepth={2}>
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
        <DemoContent />
        <Button
          onClick={this.handleDialogOpen}
          className={classes.fabsolute}
          fab={true}
          accent={true}
        >
          <span className="material-icons">add</span>
        </Button>
        <Dialog
          open={this.state.dialogOpen}
          onRequestClose={this.handleDialogClose}
        >
          <DialogTitle>Use Google's location service?</DialogTitle>
          <DialogContent>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContent>
          <DialogActions>
            <Button primary={true} onClick={this.handleDialogClose}>No</Button>
            <Button primary={true} onClick={this.handleDialogClose}>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
