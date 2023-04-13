import React, { useState } from 'react';

const Attendance = () => {
  const [attendanceStatus, setAttendanceStatus] = useState('');

  const handleClockIn = () => {
    // 連接後端，發送打卡請求

    // 更新打卡狀態
    setAttendanceStatus('已打卡');
  };

  return (
    <div className="attendance">
      <h2>員工打卡</h2>
      <button onClick={handleClockIn} className="clock-in-btn">
        打卡
      </button>
      <p className="attendance-status">{attendanceStatus}</p>
    </div>
  );
};

export default Attendance;
