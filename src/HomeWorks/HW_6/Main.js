import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// Компоненты страниц
const MainPage = () => {
  return (
    <div className="main_page">
      <h1>Main page</h1>
      <p>It is the main page of the project</p>
      <label>Links:</label>
      <ul>
        <li><Link to='/cars'>Cars</Link></li>
        <li><Link to='/cities'>Cities</Link></li>
        <li><Link to='/button'>Button</Link></li>
      </ul>
    </div>
  );
};

const FirstLink = () => {
  return (
    <div className="first_link">
      <label>Cars:</label>
      <ul>
        <li>BMW</li>
        <li>Mercedes</li>
        <li>Audi</li>
        <li>Lexus</li>
      </ul>
    </div>
  );
};

const SecondLink = () => {
  return (
    <div className="second_link">
      <h3>Cities:</h3>
      <select>
        <option>Moscow</option>
        <option>Voronezh</option>
        <option>Tambov</option>
      </select>
    </div>
  );
};

const ThirdLink = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>
        <p>You pushed {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
};

const Main = () => (
  <Router>
    <main>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cars" component={FirstLink} />
        <Route path="/cities" component={SecondLink} />
        <Route path="/button" component={ThirdLink} />
      </Switch>
    </main>
  </Router>
);


export default Main;