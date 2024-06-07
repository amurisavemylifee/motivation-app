import express from "express";

import { DebugController } from "controllers/DebugController";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  DebugController.log(`Server is running on port ${PORT}`);
});
