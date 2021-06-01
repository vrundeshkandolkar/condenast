import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function FeedDetails({ match, history, ukFeeds = [], searchResults = [] }) {
    if (!ukFeeds.length && !searchResults.length) {
        history.goBack();
    }

    const feedsData = searchResults.length
        ? searchResults.find(item => item.source.name === match.params.name)
        : ukFeeds.find(item => item.source.name === match.params.name);

    const { author, content, description, publishedAt, title, url, urlToImage, source: { name } } = feedsData || {};

    return (<div className="feed-details-wrapper">
        <h2>{ title }</h2>
        <img src={ urlToImage } />
        <p>{ content }</p>
        <p>Additional details: <a href={ url }> Link </a></p>
        <div className="feeds-footer">
            <span><strong>Author: </strong><i>{ author }</i></span>
            <span><strong>Published At: </strong><i>{ publishedAt }</i></span>
        </div>
    </div>)
}
const mapStateToProps = state => ({
    ukFeeds      : state.newsFeeds.ukFeeds,
    searchResults: state.newsFeeds.searchResults,
});
const mapDispatchToProps = {
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedDetails));