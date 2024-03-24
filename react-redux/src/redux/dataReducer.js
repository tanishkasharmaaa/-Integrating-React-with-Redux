import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";
import {produce} from 'immer'
const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
  };
  
  export const DataReducer=(state=initialState,{type,payload})=>{
  switch(type){
    case DATA_REQUEST:
        return produce(state,(original)=>{
            original.isLoading=true})
    case DATA_SUCCESS:
        return produce(state,(original)=>{
            original.isLoading=false
            original.footballMatches=payload})
            case DATA_FAILURE:
                return produce(state,(original)=>{
                    original.isLoading=false
                    original.isError=true
                    original.footballMatches=[]
                })
                default:
                    return state
  }
  }