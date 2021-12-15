import { combineReducers } from "redux";
import { bookReducer } from './bookReducer';

export const rootreducer = combineReducers({
    books: bookReducer
});