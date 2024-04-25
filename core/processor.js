import Instruction from './instruction.js';
import {ERROR} from './const.js';

export default async (request, callback) => {

    const {instruction, payload} = request.body;
    console.log(request.body);


    //Verify parameters
    if(!(instruction && Instruction.isValid(instruction))){
        callback(ERROR.invalid_instruction);
        return;
    }

    //TODO : Verify access rights

    // Execute
    Instruction[instruction](payload, callback);

}