import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import ctest from './controller/ctest.js';

const server = express();
server.use(cors());
server.use(express.json());

// Endpoints
server.use(ctest);


server.listen(process.env.PORT, () => {
    console.log("API ONLINE ON PORT "+process.env.PORT)
});