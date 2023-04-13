const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// 使用 body-parser 中間件以解析 JSON 資料
app.use(bodyParser.json());

// 預留位置以添加 Firebase 初始化代碼和配置

// 預留位置以添加其他 API 路由，例如 Attendance, EmployeeManagement 等

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // 在此處添加連接 Firebase Realtime Database 並驗證用戶的邏輯
  // 1. 初始化 Firebase
  // 2. 查詢 Realtime Database，查找與提供的用戶名和密碼匹配的用戶
  // 3. 如果找到匹配的用戶，返回成功響應，否則返回失敗響應

  // 暫時返回一個失敗響應，等待實現連接 Firebase 的邏輯
  res.json({
    success: false,
    message: '待實現：連接 Firebase Realtime Database',
  });
});

// 提供前端靜態檔案
app.use(express.static(path.join(__dirname, '../attendance-system-client/build')));

// 使前端應用能夠在任何路由下正常運作
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../attendance-system-client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
