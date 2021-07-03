import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
