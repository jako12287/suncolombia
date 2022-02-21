import { GETALL} from "../actions/types";

let initialState = {
    name:[],
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GETALL:
            return{
                name: [...action.payload]
            } 

        default: 
            return state

    }

}