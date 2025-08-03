import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DoctorProfile from './components/DoctorProfile';
import Home from './components/Home';
import AppointmentForm from './components/AppointmentForm';
import AppointmentSuccess from './components/AppointmentSuccess';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors/:id" component={DoctorProfile} />
        <Route exact path="/book/:id" component={AppointmentForm} />
        <Route exact path="/appointment-success/:id" component={AppointmentSuccess} />
      </Switch>
    </Router>
  );

}

export default App;
