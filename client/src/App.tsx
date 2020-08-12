import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App:React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ MainPage }/>
      </Switch>
    </div>
  );
}

export default App;
