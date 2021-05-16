import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
function App(){
  return(
   <div className="page-container">
     <div className='content-wrap'>
   <Router>
   <Navbar />
   <Switch>
     <Route path='/' exact component={Home} /> 
     <Route path='/services' component={Services} />
     <Route path='/signUp' component={SignUp} />
   </Switch>
   </Router>
   </div>
      <Footer />
   </div>
      
   
  );
}

export default App;
