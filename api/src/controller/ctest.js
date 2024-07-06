import {Router} from 'express';

const server = Router();

server.get('/ping', async (req, resp) => {
    resp.send("Pong");
});



export default server;