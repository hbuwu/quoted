import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FormQuotes from './pages/FormQuotes';
import Quotes from './pages/Quotes';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/formquotes'>
            <FormQuotes />
          </Route>
          <Route path='/quotes'>
            <Quotes />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
