import { withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

function FeedsTile({ author, description, publishedAt, title, url, urlToImage, source: { name }, history }) {
    return (
        <article className="feeds-article" onClick={ () => history.push(`/feed-details/${name}`) }>
            <h2>{ title }</h2>
            <div className="feeds-description">
                <p>{ description }</p>
                <LazyLoad height={200}><img src={ urlToImage } /></LazyLoad>
            </div>
            <div className="feeds-footer">
                <span><strong>Author: </strong><i>{ author }</i></span>
                <span><strong>Published At: </strong><i>{ publishedAt }</i></span>
            </div>
        </article>
    );
}

export default withRouter(FeedsTile);