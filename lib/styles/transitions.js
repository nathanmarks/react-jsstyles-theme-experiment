'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-param-reassign */

var easing = {
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
};

var _default = {
  multi: function multi(property, duration, delay, easeFunction) {
    easeFunction = easeFunction || easing.easeInOut;

    if (property && Array.isArray(property)) {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(property, duration, delay, easeFunction) {
    duration = duration || '300ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || easing.easeInOut;

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(easing, 'easing', 'src/styles/transitions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/styles/transitions.js');
})();

;