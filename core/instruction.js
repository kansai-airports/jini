import {Vertex, Request} from '../classes/index.js';
import Frame from '../frame/index.js';
import * as prompts from '../prompts/index.js';
import schema from '../schema/index.js';

const llm = {};

export default {
    predict: async function main(callback){
    
        // Set the Schema of the wanted API

        // Master LLM used to direct query to correct secondary LLMs
        llm.master = new Vertex();
        // LLM converting NL to REST API
        const preprompt = prompts.nl_to_rest(schema);
        const llm_toQuery = new Vertex(preprompt);
        // LLM forumalating final answer

        // Do
        const query = await llm_toQuery.prompt('Get all flights from Cathay Pacific that flew from ITM');

        // Return
        const obj = query.content.stringValue;
        callback(obj);

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
}

