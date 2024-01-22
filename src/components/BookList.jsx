import React, { useContext, useEffect } from "react";
import BookItem from "./BookItem";
import { productContext } from "../context/BookContext";

const BookList = () => {
  const { getTodos, todos } = useContext(productContext);
  useEffect(() => {
    getTodos();
  }, [todos]);
  return (
    <div className="list">
      {todos.map((elem) => (
        <BookItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default BookList;
