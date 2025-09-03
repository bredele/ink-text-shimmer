import test from 'node:test';
import assert from 'node:assert';
import React from 'react';
import { render } from 'ink-testing-library';
import ShimmerText from './index.js';

test('ShimmerText renders text correctly', () => {
  const { lastFrame, unmount } = render(React.createElement(ShimmerText, { children: 'Hello World' }));
  
  const output = lastFrame();
  assert(output.includes('H'), 'Should render the first character');
  assert(output.includes('W'), 'Should render a character from the text');
  
  unmount();
});

test('ShimmerText accepts speed prop', () => {
  const { lastFrame, unmount } = render(React.createElement(ShimmerText, { 
    children: 'Test', 
    speed: 100 
  }));
  
  const output = lastFrame();
  assert(output.includes('T'), 'Should render text with custom speed');
  
  unmount();
});

test('ShimmerText accepts direction prop', () => {
  const { lastFrame, unmount } = render(React.createElement(ShimmerText, { 
    children: 'Test', 
    direction: 'right-to-left' 
  }));
  
  const output = lastFrame();
  assert(output.includes('T'), 'Should render text with right-to-left direction');
  
  unmount();
});
