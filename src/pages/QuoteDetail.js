import { useParams,Route, Link } from "react-router-dom";
import { Fragment } from "react";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Oscar Wilde', text: 'Be yourself; everyone else is already taken.'},
  {id: 'q2', author: 'Frank Zappa', text: 'So many books, so little time.'},
  {id: 'q3', author: 'Marcus Tullius Cicero', text: 'A room without books is like a body without a soul.'},
  {id: 'q4', author: 'Mae West', text: 'You only live once, but if you do it right, once is enough.'},
  {id: 'q5', author: 'Mahatma Gandhi', text: 'Be the change that you wish to see in the world.'}
]

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if(!quote){
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>Load Comments</Link>
          </div>
      </Route>
      
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
