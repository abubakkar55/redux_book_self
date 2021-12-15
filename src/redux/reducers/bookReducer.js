import { actionTypes } from "../contants/action-types";
import books from "../../fakeData/books.json" ;

const initState = {
    discover: books,
    readingList: [],
    finishedList: []
};

export const bookReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TO_READING_LIST:
            const newStore = { ...state, readingList: [...state.readingList, payload] }
            return newStore;

        case actionTypes.REMOVE_FROM_READING_LIST:
            const newStores = { ...state, readingList: state.readingList.filter(item => item.id !== payload) }
            return newStores;

        default:
            return state;
    }

}