import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LandingPage}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App;