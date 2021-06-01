import ACTIONS from '../common/actionTypes';

export const setNewsFeeds = json => ({
    type: ACTIONS.NEWS_FEEDS.GET_UK_NEWS,
    payload: {
        ukFeeds: json.payload,
    },
});

export const setSearchResult = json => ({
    type: ACTIONS.NEWS_FEEDS.GET_SEARCH_RESULTS,
    payload: {
        searchResults: json.payload,
    },
});

export const setLoader = value => ({
    type: ACTIONS.NEWS_FEEDS.SET_LOADER,
    payload: {
        isLoading: value,
    },
});