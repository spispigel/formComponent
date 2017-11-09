'use strict';
var camelize = require('underscore.string.fp/camelize');
var toPairs = require('ramda/src/toPairs');
var reduce = require('ramda/src/reduce');
var React = require('react');
var camelCaseAttrMap = require('./camel-case-attribute-names');
var _ = require('lodash');

function createStyleJsonFromString(styleString) {
  styleString = styleString || '';
  var styles = styleString.split(/;(?!base64)/);
  var singleStyle, key, value, jsonStyles = {};
  for (var i = 0; i < styles.length; ++i) {
    singleStyle = styles[i].split(':');
    if (singleStyle.length > 2) {
      singleStyle[1] = singleStyle.slice(1).join(':');
    }

    key = singleStyle[0];
    value = singleStyle[1];
    if (typeof value === 'string') {
      value = value.trim();
    }

    if (key != null && value != null && key.length > 0 && value.length > 0) {
      jsonStyles[camelize(key)] = value;
    }
  }
  return jsonStyles;
}

function createElement(node, index, data, children) {
  var elementProps = {
    key: index,
  };
  if (node.attribs) {
    elementProps = reduce(function (result, keyAndValue) {
      var key = keyAndValue[0];
      var value = keyAndValue[1];
      key = camelCaseAttrMap[key.replace(/[-:]/, '')] || key;
      if (key === 'style') {
        value = createStyleJsonFromString(value);
      } else if (key === 'class') {
        key = 'className';
      } else if (key === 'for') {
        key = 'htmlFor';
      }
      if (typeof value === 'string') {
        value = value;
      }
      if (key.match(/^on/g)) {
        var newKey = key.split('on');
        key = 'on' + _.capitalize(newKey[1]);
        value = new Function(value);
      }
      result[key] = value || key;
      return result;
    }, elementProps, toPairs(node.attribs));
  }

  children = children || [];
  var allChildren = data != null ? [data, ].concat(children) : children;
  return React.createElement.apply(
    null, [node.name, elementProps, ].concat(allChildren)
  );
}

module.exports = {
  createElement: createElement,
};