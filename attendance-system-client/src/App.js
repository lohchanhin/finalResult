import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AttendancePage from './components/Attendance';
import ScheduleManagement from './components/ScheduleManagement';
import LeaveManagementPage from './components/LeaveManagement';
import ReportsPage from './components/Reports';
import SettingsPage from './components/Settings';
import EmployeeManagementPage from './components/EmployeeManagement';

function App() {
  // 假设您已经实现了登录功能，并且可以根据登录用户设置 accountType。
  // 您可以将其设置为 "employee" 或 "manager"，具体取决于您的应用程序。
  // 在这里，我将其设置为 "manager" 作为示例。
  const [accountType, setAccountType] = useState('manager');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/ScheduleManagement" element={<ScheduleManagement />} />
          <Route
            path="/leave-management"
            element={<LeaveManagementPage accountType={accountType} />}
          />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route
            path="/employee-management"
            element={<EmployeeManagementPage accountType={accountType} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
