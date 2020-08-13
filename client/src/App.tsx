import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import Normalize from '@commons/styles/Normalize';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Normalize />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;
