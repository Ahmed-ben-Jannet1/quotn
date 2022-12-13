import { NavLink } from "react-router-dom";

import { BsFillEyeFill } from "react-icons/bs";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>" {props.text} "</p>
          <p>&nbsp;-&nbsp;&nbsp;{props.author}</p>
        </blockquote>
        <figcaption>({props.type})</figcaption>
      </figure>
      <NavLink className="btn" to={`/quotes/${props.id}`}>
        <BsFillEyeFill className="stronk" /> View
      </NavLink>
    </li>
  );
};

export default QuoteItem;
