// LeaveManagement.js
import React from 'react';

function LeaveManagement({ accountType }) {
  return (
    <div className="leave-management">
      {accountType === 'employee' && (
        <div>
          {/* 員工可以查看自己的請假記錄 */}
          <h2>我的請假記錄</h2>
          {/* 在這裡顯示員工的請假記錄 */}
        </div>
      )}
      {accountType === 'manager' && (
        <div>
          {/* 管理者可以查看下屬的請假申請並批准或拒絕 */}
          <h2>下屬請假申請</h2>
          {/* 在這裡顯示下屬的請假申請以及批准或拒絕功能 */}
        </div>
      )}
    </div>
  );
}

export default LeaveManagement;
