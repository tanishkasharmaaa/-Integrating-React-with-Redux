import { ADD_TASK } from "./action";

export const ItemReducer=(state=[],{type,payload})=>{
    switch(type){
     case ADD_TASK:
        return [...state,payload]
        default:
            return state
    }
}