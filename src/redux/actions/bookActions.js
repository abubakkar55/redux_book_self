import { actionTypes } from "../contants/action-types"

export const addToReadingList =(payload) =>{
return{
    type: actionTypes.ADD_TO_READING_LIST,
    payload
}}

export const removeReadingList =(payload) =>{
return{
    type: actionTypes.REMOVE_FROM_READING_LIST,
    payload
}}

