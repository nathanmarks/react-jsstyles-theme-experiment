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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleSheet = require('stylishly/lib/styleSheet');

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _folder = require('./svg-icons/file/folder');

var _folder2 = _interopRequireDefault(_folder);

var _face = require('./svg-icons/action/face');

var _face2 = _interopRequireDefault(_face);

var _colors = require('../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _styleSheet.createStyleSheet)('AppContent', function (theme) {
  return {
    base: {
      margin: '128px 24px 0',
      width: '100%'
    },
    title: (0, _extends3.default)({}, theme.typography.title),
    componentRow: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 20,
      paddingBottom: 30
    },
    components: {
      display: 'flex',
      flexDirection: 'column'
    },
    component: {
      margin: 6
    },
    svgIcon: {
      color: '#444'
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
    key: 'render',
    value: function render() {
      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        { className: classes.base },
        _react2.default.createElement(
          'h3',
          { className: classes.title },
          'Avatar'
        ),
        _react2.default.createElement(
          'div',
          { className: classes.components },
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(_Avatar2.default, {
              src: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/73.jpg',
              className: classes.component
            }),
            _react2.default.createElement(_Avatar2.default, {
              src: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/48.jpg',
              size: 30,
              className: classes.component
            }),
            _react2.default.createElement(
              _Avatar2.default,
              {
                className: classes.component
              },
              _react2.default.createElement(_folder2.default, null)
            ),
            _react2.default.createElement(
              _Avatar2.default,
              {
                size: 30,
                className: classes.component,
                style: { backgroundColor: _colors.pink[400] }
              },
              _react2.default.createElement(_folder2.default, { style: { fill: _colors.orange[200] } })
            ),
            _react2.default.createElement(
              _Avatar2.default,
              { className: classes.component },
              'A'
            ),
            _react2.default.createElement(
              _Avatar2.default,
              {
                size: 30,
                className: classes.component,
                style: { color: _colors.deepOrange[300], backgroundColor: _colors.purple[500] }
              },
              'A'
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: classes.title },
          'Raised Button'
        ),
        _react2.default.createElement(
          'div',
          { className: classes.components },
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(
              _Button2.default,
              { className: classes.component, raised: true, primary: true },
              'Primary'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: classes.component, raised: true, accent: true },
              'Accent'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: classes.component, raised: true },
              'Default'
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: classes.title },
          'Flat Button'
        ),
        _react2.default.createElement(
          'div',
          { className: classes.components },
          _react2.default.createElement(
            'div',
            { className: classes.componentRow },
            _react2.default.createElement(
              _Button2.default,
              { className: classes.component, primary: true },
              'Primary'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: classes.component, accent: true },
              'Accent'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: classes.component },
              'Default'
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: classes.title },
          'Chip'
        ),
        _react2.default.createElement(
          'div',
          { className: classes.componentRow },
          _react2.default.createElement(
            _Chip2.default,
            { className: classes.component },
            'Chips Ahoy!'
          ),
          _react2.default.createElement(
            _Chip2.default,
            {
              onRequestDelete: function onRequestDelete() {},
              className: classes.component
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
              className: classes.component
            },
            _react2.default.createElement(_Avatar2.default, { src: 'http://www.material-ui.com/images/uxceo-128.jpg' }),
            'Clickable Chip'
          ),
          _react2.default.createElement(
            _Chip2.default,
            {
              onTouchTap: function onTouchTap() {},
              onRequestDelete: function onRequestDelete() {},
              className: classes.component
            },
            _react2.default.createElement(
              _Avatar2.default,
              null,
              _react2.default.createElement(_face2.default, { className: classes.svgIcon })
            ),
            'SvgIcon Chip'
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

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'src/components/DemoContent.js');

  __REACT_HOT_LOADER__.register(Demo, 'Demo', 'src/components/DemoContent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/DemoContent.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', 'src/components/DemoContent.js');
})();

;