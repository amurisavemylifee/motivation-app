import express from "express";

import { DebugController } from "controllers";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  DebugController.log(`Server is running on port ${PORT}`);
});
