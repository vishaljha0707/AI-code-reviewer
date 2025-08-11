const express = require('express');
const app = express();
require('dotenv').config(); 
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

app.use(cors());

app.use(express.json()); 
app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
