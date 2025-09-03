#!/usr/bin/env node

import React, { useState, useEffect } from 'react';
import { render, Box, Text } from 'ink';
import ShimmerText from '../dist/esm/index.js';

const LoadingDemo = () => {
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    'Initializing application...',
    'Loading user preferences...',
    'Connecting to server...',
    'Fetching latest data...',
    'Applying configurations...',
    'Ready!'
  ];

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [step]);

  return React.createElement(Box, {
    flexDirection: 'column',
    padding: 2
  }, [
    React.createElement(Text, { key: 'title', bold: true }, '🚀 Application Startup Demo'),
    React.createElement(Text, { key: 'spacer' }, ''),
    
    isComplete ? 
      React.createElement(Text, { key: 'complete', color: 'green', bold: true }, '✅ ' + steps[step]) :
      React.createElement(ShimmerText, { 
        key: 'loading',
        children: steps[step],
        speed: 150,
        colors: ['#00D2FF', '#3A7BD5', '#B3E5FC', '#FFFFFF', '#B3E5FC', '#3A7BD5']
      }),
    
    React.createElement(Text, { key: 'progress', color: 'gray' }, 
      `Step ${step + 1} of ${steps.length}`),
    
    React.createElement(Text, { key: 'footer', color: 'gray' }, 
      isComplete ? 'Application started successfully! Press Ctrl+C to exit' : '')
  ]);
};

render(React.createElement(LoadingDemo));

// Auto-exit after completion
setTimeout(() => {
  process.exit(0);
}, 15000);