# Examples

This folder contains examples showing how to use the `ink-text-shimmer` component.

## Running the Examples

Make sure you have built the project first:

```bash
npm run build
```

Then run any of the examples:

```bash
# Basic example showing different shimmer configurations
npm run example:basic
# or directly:
node examples/basic.js

# Loading demo with step-by-step shimmer animation
npm run example:demo
# or directly:
node examples/loading-demo.js
```

## Examples Included

### basic.js
Demonstrates various shimmer configurations:
- Basic shimmer with default settings
- Fast and slow animation speeds
- Right-to-left direction
- Custom color schemes

### loading-demo.js
Shows a realistic loading sequence that simulates application startup:
- Multi-step loading process
- Dynamic text changes
- Blue gradient shimmer effect
- Auto-completion and exit

## Usage in Your Own Projects

```javascript
import React from 'react';
import { render } from 'ink';
import ShimmerText from 'ink-text-shimmer';

const App = () => {
  return React.createElement(ShimmerText, {
    children: 'Your loading text here...',
    speed: 200,
    colors: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#E0E7FF', '#C4B5FD', '#A78BFA'],
    direction: 'left-to-right'
  });
};

render(React.createElement(App));
```

## Props

- `children` (string): The text to display with shimmer effect
- `speed` (number, optional): Animation speed in milliseconds (default: 200)
- `colors` (string[], optional): Array of colors for the shimmer gradient
- `direction` ('left-to-right' | 'right-to-left', optional): Animation direction (default: 'left-to-right')