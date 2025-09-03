#!/usr/bin/env node

import React from 'react';
import { render, Box, Text } from 'ink';
import ShimmerText from '../dist/esm/index.js';

const App = () => {
  return React.createElement(Box, {
    flexDirection: 'column',
    padding: 1
  }, [
    React.createElement(Text, { key: 'title' }, 'Ink Text Shimmer Examples'),
    React.createElement(Text, { key: 'spacer1' }, ''),
    
    React.createElement(Text, { key: 'label1' }, '1. Basic shimmer:'),
    React.createElement(ShimmerText, { 
      key: 'shimmer1',
      children: 'Loading awesome content...'
    }),
    React.createElement(Text, { key: 'spacer2' }, ''),
    
    React.createElement(Text, { key: 'label2' }, '2. Fast shimmer (100ms):'),
    React.createElement(ShimmerText, { 
      key: 'shimmer2',
      children: 'Quick loading animation',
      speed: 100
    }),
    React.createElement(Text, { key: 'spacer3' }, ''),
    
    React.createElement(Text, { key: 'label3' }, '3. Slow shimmer (300ms):'),
    React.createElement(ShimmerText, { 
      key: 'shimmer3',
      children: 'Slow and steady animation',
      speed: 300
    }),
    React.createElement(Text, { key: 'spacer4' }, ''),
    
    React.createElement(Text, { key: 'label4' }, '4. Right-to-left direction:'),
    React.createElement(ShimmerText, { 
      key: 'shimmer4',
      children: 'Reverse direction shimmer',
      direction: 'right-to-left'
    }),
    React.createElement(Text, { key: 'spacer5' }, ''),
    
    React.createElement(Text, { key: 'label5' }, '5. Custom colors (red theme):'),
    React.createElement(ShimmerText, { 
      key: 'shimmer5',
      children: 'Custom red shimmer effect',
      colors: ['#FF0000', '#FF6B6B', '#FFB3B3', '#FFFFFF', '#FFB3B3', '#FF6B6B']
    }),
    React.createElement(Text, { key: 'spacer6' }, ''),
    
    React.createElement(Text, { key: 'footer', color: 'gray' }, 'Press Ctrl+C to exit')
  ]);
};

render(React.createElement(App));