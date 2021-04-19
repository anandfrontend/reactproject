import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Header from './component/Header';
import Careers from './component/Careers';
import Contact from './component/Contact';
import NotFound from './component/NotFound'




function App() {

  return (

      <BrowserRouter>
         <Header />
                <Switch>
                    <Route exact  path="/" component={Home} />
                    <Route exact  path="/about" component={About} />
                    <Route exact  path="/careers" component={Careers} />
                    <Route exact  path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
      </BrowserRouter>

  );


}

export default App;
