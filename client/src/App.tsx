import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import Normalize from '@commons/styles/Normalize';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Normalize />
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
