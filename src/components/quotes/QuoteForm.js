import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [clickedOn, setClicked] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();
  const typeInputRef = useRef();
  const codeInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const code = codeInputRef.current.value;

    // optional: Could validate here
    if (code !== process.env.REACT_APP_CODE || code !== "coding1234") {
      return setClicked(true);
    }
    props.onAddQuote({
      author: enteredAuthor,
      type: enteredType,
      text: enteredText,
      code: code,
    });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      {clickedOn && <Redirect to="/notAllowed" />}
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="type">Type</label>
            <select name="type" id="type" ref={typeInputRef}>
              <option value="romance">Romance</option>
              <option value="sport">Sport</option>
              <option value="existance">Life</option>
              <option value="work">Work</option>
              <option value="morals">Morals</option>
              <option value="happiness">Happiness</option>
              <option value="sadness">Sadness</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="code">Code</label>
            <input type="password" id="code" ref={codeInputRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
