'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('../styles/styleSheet');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _LinearProgress = require('./Progress/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _LinearProgressExampleDeterminate = require('./LinearProgressExampleDeterminate');

var _LinearProgressExampleDeterminate2 = _interopRequireDefault(_LinearProgressExampleDeterminate);

var _folder = require('./svg-icons/file/folder');

var _folder2 = _interopRequireDefault(_folder);

var _colors = require('../styles/colors');

var _face = require('./svg-icons/action/face');

var _face2 = _interopRequireDefault(_face);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('app-content', function () {
  return {
    appContent: {
      margin: 64
    },
    componentRow: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 10
    },
    components: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      margin: 6
    },
    chip: {
      margin: 6
    },
    avatar: {
      margin: 6
    },
    svgIcon: {
      fill: '#444'
    }
  };
});

var Demo = function (_Component) {
  (0, _inherits3.default)(Demo, _Component);

  function Demo() {
    (0, _classCallCheck3.default)(this, Demo);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Demo).apply(this, arguments));
  }

  (0, _createClass3.default)(Demo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.styleManager.attach(styleSheet);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.styleManager.detach(styleSheet);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.context.styleManager.getClasses(styleSheet);

      return _react2.default.createElement(
        'div',
        { className: classes.appContent },
        _react2.default.createElement(
          'h4',
          null,
          'JS Styles'
        ),
        _react2.default.createElement(
          'div',
          { className: classes.components },
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(_Avatar2.default, {
              src: 'http://www.material-ui.com/images/kerem-128.jpg',
              className: classes.avatar
            }),
            _react2.default.createElement(_Avatar2.default, {
              src: 'http://www.material-ui.com/images/kerem-128.jpg',
              size: 30,
              className: classes.avatar
            }),
            _react2.default.createElement(
              _Avatar2.default,
              {
                className: classes.avatar
              },
              _react2.default.createElement(_folder2.default, null)
            ),
            _react2.default.createElement(
              _Avatar2.default,
              {
                size: 30,
                className: classes.avatar,
                style: { backgroundColor: _colors.pink[400] }
              },
              _react2.default.createElement(_folder2.default, { style: { fill: _colors.orange[200] } })
            ),
            _react2.default.createElement(
              _Avatar2.default,
              { className: classes.avatar },
              'A'
            ),
            _react2.default.createElement(
              _Avatar2.default,
              {
                size: 30,
                className: classes.avatar,
                style: { color: _colors.deepOrange[300], backgroundColor: _colors.purple[500] }
              },
              'A'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(
              _Button2.default,
              { className: classes.button },
              'Hello World'
            ),
            _react2.default.createElement(
              _Button2.default,
              { primary: true, className: classes.button },
              'Hello World'
            ),
            _react2.default.createElement(
              _Button2.default,
              { accent: true, className: classes.button },
              'Hello World'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(
              _Chip2.default,
              { className: classes.chip },
              'Chips Ahoy!'
            ),
            _react2.default.createElement(
              _Chip2.default,
              {
                onRequestDelete: function onRequestDelete() {},
                className: classes.chip
              },
              _react2.default.createElement(
                _Avatar2.default,
                null,
                'MB'
              ),
              'Deletable Chip'
            ),
            _react2.default.createElement(
              _Chip2.default,
              {
                onTouchTap: function onTouchTap() {},
                onRequestDelete: function onRequestDelete() {},
                className: classes.chip
              },
              _react2.default.createElement(_Avatar2.default, { src: 'http://www.material-ui.com/images/uxceo-128.jpg' }),
              'Clickable Chip'
            ),
            _react2.default.createElement(
              _Chip2.default,
              {
                onTouchTap: function onTouchTap() {},
                onRequestDelete: function onRequestDelete() {},
                className: classes.chip
              },
              _react2.default.createElement(
                _Avatar2.default,
                null,
                _react2.default.createElement(_face2.default, { className: classes.svgIcon })
              ),
              'SvgIcon Chip'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(_LinearProgress2.default, { mode: 'indeterminate' })
          ),
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(_LinearProgressExampleDeterminate2.default, null)
          )
        )
      );
    }
  }]);
  return Demo;
}(_react.Component);

Demo.propTypes = {
  children: _react.PropTypes.any
};
Demo.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
var _default2 = Demo;
exports.default = _default2;
var _default = Demo;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/Examples.js');

  __REACT_HOT_LOADER__.register(Demo, 'Demo', 'src/components/Examples.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Examples.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'src/components/Examples.js');
})();

;