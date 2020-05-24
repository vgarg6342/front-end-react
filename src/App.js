import React from 'react';
import './App.css';
import EventDiscription from './components/EventDiscription';
import Events from './components/Events';
import Navcomp from './components/Navcomp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dash from './components/Dashboard'
import Userdetails from './components/Userdetails'
import Login from './components/Login'
import About from './components/About'
function App(){
    return (
        <Router>
        <div className = "App">
            <Navcomp/>
            <Switch>
            <Route path="/" exact component= {About}/>
            <Route path="/Events" exact component= {Events} />
            <Route path= "/Dashboard" exact component= {Dash}/>
            <Route path="/Events/:id" exact component= {EventDiscription}/>
            <Route path="/userdetails/" exact component= {Userdetails}/>
            <Route path="/login/" exact component= {Login}/>
            
            </Switch>
        </div>
        </Router>
    );
}


export default App;
