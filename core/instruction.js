import {Vertex, Request} from '../classes/index.js';
import Frame from '../frame/index.js';
import * as prompts from '../prompts/index.js';
import schema from '../schema/index.js';
import {ERROR} from './const.js';

const llm = {
    elect: new Vertex(prompts.elect(schema)),
    toRest: new Vertex(prompts.nl_to_rest(schema)),
};
// direct query to correct LLM
// llm.master = new Vertex();
// convert NL to REST query object
// llm.toRest = new Vertex(prompts.nl_to_rest(schema));
// convert NL to format
// llm.NlToFormat = new Vertex();
// convert response object to Text Answer
// llm.RespToText = new Vertex();

export default class Instruction {

    static async predict(params, callback){

        // elect the query
        const {content} = await llm.elect.prompt(params.prompt);
        var answer, reason;

        try {
            console.log('RAW ANSWER')
            console.log(content.stringValue);
            console.log('---------------------')
            const {answer, reason} = JSON.parse(content.stringValue);
            // console.log(res);
            // answer = res.a;
            // reason = res.r;
            console.log(answer, reason)
            if(!answer || !('YES','NO').includes(answer)) throw '';
        }catch(_){
            console.log(_);
            callback(ERROR.logic_error, _);
            return;
        }

        //
        if(answer === 'NO'){
            callback(ERROR.ok,{
                category:'apology',
                response: {
                    type:'string',
                    content:reason
                }
            });
            return;
        }

        callback(ERROR.ok,{
            category:'solution',
            response: {
                type:'string',
                content:reason
            }
        });


        return;

        // const r = verb.get(qobj); // obtain the result from api

        /*
            // to create API request based on JSON
            // to convert API response to NL
            const verb = new Verb(SCHEM);
            const objgen = new LLM(SCHEM);
            // graphic representation of result
            const frame = new Frame();

            const prompt = 'show me all passenger in T1';
            const qobj = reqgen.get(prompt); // obtain the query object
            const el = objgen.get(r); // obtain the formating object
            frame.write(el); // display the result to the user
        */

    }

    static isValid(method) {
        return Object.getOwnPropertyNames(Instruction)
            .filter(p => typeof Instruction[p] === 'function' && p !== 'isValid')
            .includes(method)
    }

}

