import React, { useContext } from "react";
import { productContext } from "../context/BookContext";
import { Link } from "react-router-dom";

const BookItem = ({ todoName, todoPrice, todoImg, todoAuthor, id }) => {
  const { deleteTodo } = useContext(productContext);
  return (
    <div className="item">
      <img className="img" src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h5>{todoPrice}</h5>
      <h3>{todoAuthor}</h3>
      <button onClick={() => deleteTodo(id)}>delete</button>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default BookItem;
