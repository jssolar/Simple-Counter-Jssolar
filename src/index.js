import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import SecondsCounter from './Counter';
import 'bootstrap-icons/font/bootstrap-icons.css'



ReactDOM.createRoot(document.getElementById('root')
).render(
  <React.StrictMode>

    <SecondsCounter />

  </React.StrictMode>
  )

    