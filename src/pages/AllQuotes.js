import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Oscar Wilde', text: 'Be yourself; everyone else is already taken.'},
  {id: 'q2', author: 'Frank Zappa', text: 'So many books, so little time.'},
  {id: 'q3', author: 'Marcus Tullius Cicero', text: 'A room without books is like a body without a soul.'},
  {id: 'q4', author: 'Mae West', text: 'You only live once, but if you do it right, once is enough.'},
  {id: 'q5', author: 'Mahatma Gandhi', text: 'Be the change that you wish to see in the world.'}
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
