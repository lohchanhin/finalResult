const express = require('express');
const path = require('path');

const app = express();

// 使用 express.static 中間件提供靜態文件
const clientBuildPath = path.join(__dirname, '..', 'attendance-system-client', 'public');
app.use(express.static(path.join(__dirname, '../attendance-system-client/build')));

// 預設路由
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// 啟動伺服器
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
