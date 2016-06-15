import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';
import DeleteIcon from '../svg-icons/navigation/cancel';

export const styleSheet = createStyleSheet('Chip', (theme) => {
  const {palette, shadows, transitions, typography} = theme;

  return {
    base: {
      ...typography.chip,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      outline: 'none',
      border: 0,
      color: palette.getContrastText(palette.grey[300]),
      backgroundColor: palette.grey[300],
      boxShadow: shadows[0],
      borderRadius: 16,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: transitions.easeOut(),
    },
    clickable: {
      '&:active': {
        boxShadow: shadows[1],
      },
      '&:hover, &:active': {
        backgroundColor: palette.grey.A100,
      },
      cursor: 'pointer',
    },
    avatar: {
      marginRight: -4,
    },
    label: {
      color: palette.text,
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    deleteIcon: {
      fill: palette.grey[500],
      '&:hover': {
        fill: palette.grey[600],
      },
      cursor: 'pointer',
      margin: '0 4px 0 -8px',
    },
  };
});

export default class Chip extends Component {
  static propTypes = {
    /**
     * CSS `className` of the Avatar.
     */
    avatarClassName: PropTypes.string,
    /**
     * Used to render elements inside the Chip.
     */
    children: PropTypes.node,
    /**
     * CSS `className` of the root element.
     */
    className: PropTypes.string,
    /**
     * CSS `className` of the delete icon element.
     */
    deleteIconClassName: PropTypes.string,
    /**
     * CSS `className` of the label.
     */
    labelClassName: PropTypes.string,
    /**
     * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
     * @param {object} event `touchTap` event targeting the element.
     */
    onRequestDelete: PropTypes.func,
    /**
     * Callback function fired when the `Chip` element is touch-tapped.
     *
     * @param {object} event TouchTap event targeting the element.
     */
    onTouchTap: PropTypes.func,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      avatarClassName,
      children: theChildren,
      className,
      deleteIconClassName,
      labelClassName,
      onRequestDelete,
      onTouchTap,
      ...other,
    } = this.props;

    let children = theChildren;

    const classes = this.context.styleManager.render(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true,
      [classes.clickable]: onTouchTap,
    }, className);

    const avatarClassNames = ClassNames({
      [classes.avatar]: true,
    }, avatarClassName);

    const labelClassNames = ClassNames({
      [classes.label]: true,
    }, labelClassName);

    const deleteIconclassNames = ClassNames({
      [classes.deleteIcon]: onRequestDelete,
    }, deleteIconClassName);

    const deleteIcon = onRequestDelete ?
      <DeleteIcon
        className={deleteIconclassNames}
        onTouchTap={onRequestDelete}
      /> :
      null;

    const childCount = React.Children.count(children);

    let avatar = null;
    // If the first child is an avatar, extract it and style it
    if (childCount > 1) {
      children = React.Children.toArray(children);

      if (React.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
        avatar = children.shift();

        avatar = React.cloneElement(avatar, {
          size: 32,
          className: avatarClassNames,
        });
      }
    }
    return (
      <div className={classNames} {...other}>
        {avatar}
        <span className={labelClassNames}>{children}</span>
        {deleteIcon}
      </div>
    );
  }
}
