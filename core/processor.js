import Instruction from './instruction.js';
import {ERROR} from './const.js';

export default async (request, callback) => {

    const params = request.body;

    console.log(request);
    console.log(params);
    console.log('B');

    const instruction = 'predict';

    Instruction[instruction](params, callback);

    // Verify parameters
    // if(!(instruction && Instruction.isValid(instruction))){
    //     callback(ERROR.invalid_instruction);
    //     return;
    // }

    // const {params,query,body} = request;
    // Verify access right fn(instruction, endpoint)
    /// TODO

    // call the instruction
    // try{
    //     Instruction[instruction](request, callback)
    // }catch(_){
    //     console.log(_);
    //     callback(ERROR.invalid_signature);
    //     return
    // }

}