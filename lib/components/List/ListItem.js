'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    (0, _classCallCheck3.default)(this, ListItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ListItem).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        this.props.children
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  children: _react.PropTypes.node
};
var _default = ListItem;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ListItem, 'ListItem', 'src/components/List/ListItem.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/List/ListItem.js');
})();

;