/// <reference path="typings/react/react.d.ts" />

require('./index.css');

import React = require('react');
import Button = require('./Button');

React.render(
  React.createElement(Button.Button, {}),
  document.getElementById('main'));
