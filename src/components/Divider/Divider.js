import React, {PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('Divider', (theme) => {
  const {palette} = theme;

  return {
    root: {
      height: 1,
      marginTop: -1,
      backgroundColor: palette.text.divider,
    },
  };
});

export default function Divider(props, context) {
  const {className, ...other} = props;
  const classes = context.styleManager.render(styleSheet);
  return (
    <hr className={ClassNames(classes.root, className)} {...other} />
  );
}

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
