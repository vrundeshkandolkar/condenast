import ACTIONS from '../common/actionTypes';
import { initialState } from '../common/constants';

const {
    NEWS_FEEDS,
} = ACTIONS;

export const newsFeeds = (state = initialState.ukFeeds, action) => {
    switch (action.type) {
        case NEWS_FEEDS.GET_UK_NEWS:
        case NEWS_FEEDS.GET_SEARCH_RESULTS:
        case NEWS_FEEDS.SET_LOADER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};