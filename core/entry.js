import express from 'express';
import cors from 'cors';
import process from './processor.js';

const app = express();
const port = 3001;
const msg_welcome = `[STARTED] listening on port ${port}`;
const endpoint = '/query';

export default {
    start: async () => {

        //
        app.use(cors());
        app.use(express.json());

        //
        app.post(endpoint, (request, response) => {
            process(request, function(error, payload = {}){
                response.json({error:error, payload:payload});
            });
        });

        // start server
        app.listen(port, () => console.log(msg_welcome));

    }
}
