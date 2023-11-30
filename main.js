import LLM from './llm/index.js';
import Verb from './verb/index.js';
import Frame from './frame/index.js';

// descirption of the existing APIs
const SCHEM = {};

// to convert NL to JSON
const reqgen = new LLM(SCHEM);

/** RES
 * {
 *      base:'',
 *      endpoint:'',
 *      method:'',
 *      params:'',
 *      body:''
 * }
 **/

// to create API request based on JSON
const verb = new Verb(SCHEM);
// to convert API response to NL
const objgen = new LLM(SCHEM);
// graphic representation of result
const frame = new Frame();

const prompt = 'show me all passenger in T1';
const qobj = reqgen.get(prompt); // obtain the query object
const r = verb.get(qobj); // obtain the result from api
const el = objgen.get(r); // obtain the formating object
frame.write(el); // display the result to the user
