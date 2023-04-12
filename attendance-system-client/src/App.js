import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AttendancePage from './components/Attendance';
import ScheduleManagement from './components/ScheduleManagement';
import LeaveManagementPage from './components/LeaveManagement';
import ReportsPage from './components/Reports';
import SettingsPage from './components/Settings';
import EmployeeManagementPage from './components/EmployeeManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/ScheduleManagement" element={<ScheduleManagement />} />
          <Route path="/leave-management" element={<LeaveManagementPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/employee-management" element={<EmployeeManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
