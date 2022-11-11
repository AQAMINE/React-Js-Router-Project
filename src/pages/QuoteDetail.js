import { useParams } from "react-router-dom";
import { Fragment } from "react";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetail;
