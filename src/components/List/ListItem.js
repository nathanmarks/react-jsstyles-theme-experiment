import React, {Component, PropTypes} from 'react';

export default class ListItem extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
}
