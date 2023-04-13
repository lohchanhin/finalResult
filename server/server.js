import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../attendance-system-client/build')));

// Put API routes here

// Catch all other routes and return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../attendance-system-client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
