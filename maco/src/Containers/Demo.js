import React from 'react';
import { createRoot } from 'react-dom';
import Navbar from '../components/navbar';
import DemoApp from '../components/DemoApp';
function Demo () {
  return (
   createRoot(document.body.appendChild(document.createElement('div')))
   .render(<DemoApp />)
  );
};

export default Demo;