import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Registration from "./Registration";
import ComponentCustomHook from "./ComponentCustomHook";
import Fetch from "./Fetch";


const root = ReactDOM.createRoot(document.
getElementById('root'));


root.render(
    <div>
        <Registration />
        <ComponentCustomHook />
        <Fetch />
    </div>
);
reportWebVitals();
