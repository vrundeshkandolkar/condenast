import React from 'react';
import { connect } from 'react-redux';
import { getUKNews, getKeywordSearch } from '../common/services';
import { setSearchResult } from '../actions/newsFeeds';
import ACTIONS from '../common/actionTypes';
import FeedsTile from './FeedsTile';
import '../App.css';

class NewsFeeds extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef(this);
    }

    componentDidMount() {
        const { ukFeeds = [], searchResults = [] } = this.props;
        if (!ukFeeds.length && !searchResults.length) {
            this.props.getUKNews();
        }

        this.ref.addEventListener('keyup', this.handleKeyboardEnter);
    }

    componentWillUnmount() {
        this.ref.removeEventListener("keyup", this.handleKeyboardEnter);
    }

    handleKeyboardEnter = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.handleOnSearch();
        }
    }

    handleOnSearch = () => {
        if (this.ref.value) {
            this.props.getKeywordSearch(this.ref.value);
        }
    }

    handleInputChange = (e) => {
        const { searchResults, setSearchResult = [] } = this.props;
        if (!e.target.value && searchResults.length) {
            setSearchResult({
                type: ACTIONS.NEWS_FEEDS.GET_SEARCH_RESULTS,
                payload: [],
            });
        }
    }

    render() {
        const { ukFeeds = [], searchResults = [], isLoading } = this.props;
        return (<div className="feeds-wrapper">
            <div className="search-wrapper">
                <input type="search" id="search" name="search" ref={elem => this.ref = elem} onChange={ this.handleInputChange } />
                <button onClick={ this.handleOnSearch }> Search </button>
            </div>
            {isLoading
                ? <div>Loading feeds ...</div>
                : searchResults.length
                    ? searchResults.map((feed, i) =>
                        <FeedsTile
                            key={ `feed-${i}` }
                            { ...feed }
                        />)
                    : ukFeeds.map((feed, i) =>
                        <FeedsTile
                            key={ `feed-${i}` }
                            { ...feed }
                        />)
                }
        </div>);
    }
}

const mapStateToProps = state => ({
    ukFeeds      : state.newsFeeds.ukFeeds,
    searchResults: state.newsFeeds.searchResults,
    isLoading    : state.newsFeeds.isLoading,
});
const mapDispatchToProps = {
    getUKNews,
    getKeywordSearch,
    setSearchResult,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeeds);