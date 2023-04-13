// EmployeeManagement.js
import React from 'react';

function EmployeeManagement({ accountType }) {
  return (
    <div className="employee-management">
      {accountType === 'employee' && (
        <div>
          {/* 員工可以查看自己的資料 */}
          <h2>個人資料</h2>
          {/* 在這裡顯示員工的個人資料 */}
        </div>
      )}
      {accountType === 'manager' && (
        <div>
          {/* 管理者可以查看和編輯所有員工資料 */}
          <h2>員工管理</h2>
          {/* 在這裡顯示員工列表以及編輯功能 */}
        </div>
      )}
    </div>
  );
}

export default EmployeeManagement;
