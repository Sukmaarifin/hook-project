import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SideEffect from './routes/SideEffect';
import ComponentState from './routes/ComponentState';
import GlobalState from './routes/GlobalState';
import Performance from './routes/Performance';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/part-1" component={ComponentState}/>
          <Route exact path="/part-2" component={SideEffect}/>
          <Route exact path="/part-3" component={GlobalState}/>
          <Route exact path="/part-4" component={Performance}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
