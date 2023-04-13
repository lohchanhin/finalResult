import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Attendance from './components/Attendance';
import LeaveManagement from './components/LeaveManagement';
import Report from './components/Reports';
import Settings from './components/Settings';
import EmployeeManagement from './components/EmployeeManagement';
import ScheduleManagement from './components/ScheduleManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/leave-management" component={LeaveManagement} />
            <Route path="/report" component={Report} />
            <Route path="/settings" component={Settings} />
            <Route path="/employee-management" component={EmployeeManagement} />
            <Route path="/schedule-management" component={ScheduleManagement} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
