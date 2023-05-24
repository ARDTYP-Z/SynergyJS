import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from "./Hero"
import reportWebVitals from './reportWebVitals';
import Hero1 from "./HW_3_1";
import WelcomeMain from "./App";


const root = ReactDOM.createRoot(document.
getElementById('root'));

root.render(
    <div>
      <Hero1 />
      <Hero />
      <WelcomeMain />
    </div>
);
reportWebVitals();
