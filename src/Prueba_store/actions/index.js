import { GETALL } from "./types";
import axios from 'axios';


export const getName = ()=>{
    
    return async(dispatch)=>{
        let get = await axios.get('http://localhost:5000/name')
        dispatch({
            type: GETALL,
            payload: get.data
        })
    }
}


// export const postName = async(value)=>{

//     console.log('esta es la accion',value)
//     let post =await fetch('http://localhost:5000/name',{
//             method: 'POST',
//             headers: {
//                 Accep: 'application/jason',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(value)
//         })
//         return post
        

// }


