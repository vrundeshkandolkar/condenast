import axios from 'axios';
import ACTIONS from './actionTypes';
import { setNewsFeeds, setSearchResult, setLoader } from '../actions/newsFeeds';

const baseURL = 'http://localhost:8080/api/'

export const getUKNews = () => dispatch => {
    dispatch(setLoader(true));
    axios({
        method: 'get',
        url: `${baseURL}uk-news`,
        responseType: 'json',
    })
        .then((response) => {
            dispatch(setLoader(false));
            dispatch(setNewsFeeds({
                type: ACTIONS.NEWS_FEEDS.GET_UK_NEWS,
                payload: response.data.articles,
            }));
        })
        .catch(e => {
            dispatch(setLoader(false));
            console.error('[getUKNews] Error: ', e);
        });
}

export const getKeywordSearch = (keyword) => dispatch => {
    dispatch(setLoader(true));
    axios({
        method: 'get',
        url: `${baseURL}uk-news/${keyword}`,
        responseType: 'json',
    })
        .then((response) => {
            dispatch(setLoader(false));
            dispatch(setSearchResult({
                type: ACTIONS.NEWS_FEEDS.GET_SEARCH_RESULTS,
                payload: response.data.articles,
            }));
        })
        .catch(e => {
            dispatch(setLoader(false));
            console.error('[getKeywordSearch] Error: ', e);
        });
}