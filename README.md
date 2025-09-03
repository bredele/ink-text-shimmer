# ink-text-shimmer

A React component for [Ink](https://github.com/vadimdemedes/ink) that adds a beautiful shimmering effect to text, perfect for loading indicators and dynamic UI elements in CLI applications.

## Installation

```bash
npm install ink-text-shimmer
```

## Usage

```tsx
import React from 'react';
import { render } from 'ink';
import ShimmerText from 'ink-text-shimmer';

const App = () => <ShimmerText>Loading...</ShimmerText>;

render(<App />);
```

## Props

| Prop        | Type                                 | Default                                                              | Description                              |
| ----------- | ------------------------------------ | -------------------------------------------------------------------- | ---------------------------------------- |
| `children`  | `string`                             | -                                                                    | The text to display with shimmer effect  |
| `speed`     | `number`                             | `200`                                                                | Animation speed in milliseconds          |
| `colors`    | `string[]`                           | `['#8B5CF6', '#A78BFA', '#C4B5FD', '#E0E7FF', '#C4B5FD', '#A78BFA']` | Array of colors for the shimmer gradient |
| `direction` | `'left-to-right' \| 'right-to-left'` | `'left-to-right'`                                                    | Direction of the shimmer animation       |
