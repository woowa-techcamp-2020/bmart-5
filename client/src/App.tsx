import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import ProductPage from '@pages/ProductPage';
import Normalize from '@commons/styles/Normalize';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Normalize />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/product" component={ProductPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;
