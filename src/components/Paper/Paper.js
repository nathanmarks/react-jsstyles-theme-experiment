import React, {PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('Paper', (theme) => {
  const {palette} = theme;
  const shadows = {};

  theme.shadows.forEach((shadow, index) => {
    shadows[`dp-${index}`] = {
      boxShadow: shadow,
    };
  });

  return {
    root: {
      backgroundColor: palette.background.paper,
    },
    ...shadows,
  };
});

export default function Paper(props, context) {
  const {className, zDepth, ...other} = props;
  const classes = context.styleManager.render(styleSheet);

  const classNames = ClassNames(classes.root, {
    [classes[`dp-${zDepth >= 0 ? zDepth : 0}`]]: true,
  }, className);

  return (
    <div className={classNames} {...other} />
  );
}

Paper.propTypes = {
  className: PropTypes.string,
  zDepth: PropTypes.number,
};

Paper.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
