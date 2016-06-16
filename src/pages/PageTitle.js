import React, {PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import ClassNames from 'classnames';

export const styleSheet = createStyleSheet('PageTitle', (theme) => {
  return {
    root: {
      ...theme.typography.display2,
    },
  };
});

export default function PageTitle(props, context) {
  const {className, ...other} = props;
  const classes = context.styleManager.render(styleSheet);
  return (
    <h2 className={ClassNames(classes.root, className)} {...other} />
  );
}

PageTitle.propTypes = {
  className: PropTypes.string,
};

PageTitle.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
