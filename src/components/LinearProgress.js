import React, {Component, PropTypes} from 'react';
import { createStyleSheet } from '../styles/styleSheet';
import ClassNames from 'classnames';

function getRelativeValue(value, min, max) {
  const clampedValue = Math.min(Math.max(min, value), max);
  const rangeValue = max - min;
  const relValue = Math.round(clampedValue / rangeValue * 10000) / 10000;
  return relValue * 100;
}

export const styleSheet = createStyleSheet('linear-progress', (theme) => {
  const { palette, transitions,} = theme;

  return {
    base: {
      position: 'relative',
      height: 4,
      display: 'block',
      width: '100%',
      backgroundColor: palette.grey[400],
      borderRadius: 2,
      margin: 0,
      overflow: 'hidden',
    },
    bar: {
      height: '100%',
    },
    barDeterminate: {
      backgroundColor: palette.primary[400],
      transition: transitions.create('width', '.3s', null, 'linear'),
    },
    barFragment1: {
      position: 'absolute',
      backgroundColor: palette.primary[400],
      top: 0,
      left: 0,
      bottom: 0,
      transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.650, 0.815, 0.735, 0.395)'),
    },
    barFragment2: {
      position: 'absolute',
      backgroundColor: palette.primary[400],
      top: 0,
      left: 0,
      bottom: 0,
      transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'),
    }
  };
});


class LinearProgress extends Component {
  static propTypes = {
    /**
     * The css class name of the root `div`.
     */
    className: PropTypes.string,
    /**
     * The max value of progress, only works in determinate mode.
     */
    max: PropTypes.number,
    /**
     * The min value of progress, only works in determinate mode.
     */
    min: PropTypes.number,
    /**
     * The mode of show your progress, indeterminate for when
     * there is no value for progress.
     */
    mode: PropTypes.oneOf(['determinate', 'indeterminate']),
    /**
     * The value of progress, only works in determinate mode.
     */
    value: PropTypes.number,
  };

  static defaultProps = {
    mode: 'indeterminate',
    value: 0,
    min: 0,
    max: 100,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.context.styleManager.attach(styleSheet);
  }

  componentDidMount() {
    this.timers = {};

    this.timers.bar1 = this.barUpdate('bar1', 0, this.refs.bar1, [
      [-35, 100],
      [100, -90],
    ]);

    this.timers.bar2 = setTimeout(() => {
      this.barUpdate('bar2', 0, this.refs.bar2, [
        [-200, 100],
        [107, -8],
      ]);
    }, 850);
  }

  componentWillUnmount() {
    clearTimeout(this.timers.bar1);
    clearTimeout(this.timers.bar2);
    this.context.styleManager.detach(styleSheet);
  }

  barUpdate(id, step, barElement, stepValues) {
    if (this.props.mode !== 'indeterminate') return;

    step = step || 0;
    step %= 4;

    // const right = this.context.muiTheme.isRtl ? 'left' : 'right';
    // const left = this.context.muiTheme.isRtl ? 'right' : 'left';
    const right = 'right';
    const left = 'left';

    if (step === 0) {
      barElement.style[left] = `${stepValues[0][0]}%`;
      barElement.style[right] = `${stepValues[0][1]}%`;
    } else if (step === 1) {
      barElement.style.transitionDuration = '840ms';
    } else if (step === 2) {
      barElement.style[left] = `${stepValues[1][0]}%`;
      barElement.style[right] = `${stepValues[1][1]}%`;
    } else if (step === 3) {
      barElement.style.transitionDuration = '0ms';
    }
    this.timers[id] = setTimeout(() => this.barUpdate(id, step + 1, barElement, stepValues), 420);
  }

  render() {
    const {
      className,
      max,
      min,
      mode,
      value,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.getClasses(styleSheet);

    const classNames = ClassNames({
      [classes.base]: true
    }, className);

    const barClassNames = ClassNames({
      [classes.bar]: true,
      [classes.barDeterminate]: mode === 'determinate'
    });

    const bar1ClassNames = ClassNames({
      [classes.barFragment1]: mode === 'indeterminate'
    });

    const bar2ClassNames = ClassNames({
      [classes.barFragment2]: mode === 'indeterminate'
    });

    const barStyle = (mode === 'determinate') ? {width: `${getRelativeValue(value, min, max)}%`} : {};

    return (
      <div className={classNames} {...other}>
        <div className={barClassNames} style={barStyle}>
          <div ref="bar1" className={bar1ClassNames}></div>
          <div ref="bar2" className={bar2ClassNames}></div>
        </div>
      </div>
    );
  }
}

export default LinearProgress;
