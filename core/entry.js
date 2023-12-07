import express from 'express';
import cors from 'cors';
import process from './processor.js';

const app = express();
const port = 3001;
const msg_welcome = `[STARTED] listening on port ${port}`;
const endpoint = '/query';

export default {
    start: async () => {
        // single endpoint 
        app.post(endpoint, (request, response) => {
            process(request, function(error, payload){
                response.json({error:error, payload:payload});
            });
        });

        // start server
        app.use(cors());
        app.listen(port, () => console.log(msg_welcome));


        // _schema.forEach( _t => {
        //     ['get','post','delete'].forEach(method => {
        //         app[method](
        //             `/${_t.name}`, 
        //             function (req,res) {
        //                 process({
        //                     instruction: method,
        //                     endpoint: _t.name,
        //                     request: req,
        //                 }, (err,pld) => res.json({error:err, payload:pld}));
        //             }
        //         );
        //     })
        // });

        // app.get('*', (req, res) => res.json({})) // default route
    }
}
