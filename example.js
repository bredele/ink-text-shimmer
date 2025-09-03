#!/usr/bin/env node

const React = require('react');
const { render } = require('ink');
const ShimmerText = require('./dist/cjs/index.js').default;

const App = () => {
  return React.createElement(React.Fragment, null, 
    React.createElement(ShimmerText, { 
      children: "Loading awesome content...",
      speed: 150,
      colors: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#E0E7FF', '#C4B5FD', '#A78BFA']
    })
  );
};

render(React.createElement(App));

// Exit after 5 seconds to demonstrate
setTimeout(() => process.exit(0), 5000);