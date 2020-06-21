import * as SearchModel from '../models/SigIn';
import {elements} from './baseView'

export const getInputs = ()=> { 

    const inputs = {
        inputUser: elements.inputUser.value, 
        inputPassword: elements.inputpassword.value
    }    

    return inputs;
        
}; 


