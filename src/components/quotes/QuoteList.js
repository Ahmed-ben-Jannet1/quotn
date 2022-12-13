import { useState } from "react";
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const sort = (quotes, key) => {
  return quotes.filter((quote) => quote.type === key);
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [ro, setRo] = useState(0);

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  let sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  switch (ro) {
    case 0:
      sortedQuotes = props.quotes;
      break;
    case 1:
      sortedQuotes = sort(props.quotes, "romance");
      break;
    case 2:
      sortedQuotes = sort(props.quotes, "sport");
      break;
    case 3:
      sortedQuotes = sort(props.quotes, "existance");
      break;
    case 4:
      sortedQuotes = sort(props.quotes, "work");
      break;
    case 5:
      sortedQuotes = sort(props.quotes, "happiness");
      break;
    case 6:
      sortedQuotes = sort(props.quotes, "sadness");
      break;
    case 7:
      sortedQuotes = sort(props.quotes, "morals");
      break;
    default:
      sortedQuotes = props.quotes;
  }

  const allQuotesHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?`,
    });
    setRo(0);
  };

  const romanceHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?romance`,
    });
    setRo(1);
  };
  const sportHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sport`,
    });
    setRo(2);
  };

  const exHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?existance`,
    });
    setRo(3);
  };

  const workHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?work`,
    });
    setRo(4);
  };

  const hapHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?happiness`,
    });
    setRo(5);
  };
  const sadHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sadness`,
    });
    setRo(6);
  };
  const morHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?moral`,
    });
    setRo(7);
  };

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.searching}>
        <div className={classes.sorting}>
          <button onClick={allQuotesHandler}>All Quotes</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={changeSortingHandler}>
            Sort {isSortingAscending ? "Descending" : "Ascending"}
          </button>
        </div>
        <div className={classes.sorting}>
          <button onClick={romanceHandler}>Romance</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={workHandler}>Work</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={sportHandler}>Sport</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={exHandler}>Existance</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={hapHandler}>Happiness</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={sadHandler}>Sadness</button>
        </div>
        <div className={classes.sorting}>
          <button onClick={morHandler}>Morals</button>
        </div>
      </div>

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            type={quote.type}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
