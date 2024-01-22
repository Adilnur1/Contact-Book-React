import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../context/BookContext";

const AddBook = () => {
  const { addTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name.trim() || !price.trim() || !img.trim() || !author.trim()) {
      return;
    }
    let newObj = {
      todoName: name,
      todoPrice: price,
      todoImg: img,
      todoAuthor: author,
    };
    addTodo(newObj);
    setName("");
    setPrice("");
    setImg("");
    setAuthor("");
    navigate("/");
  };
  return (
    <div className="inp">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Название книги"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Цена"
      />
      <input
        value={img}
        onChange={(e) => setImg(e.target.value)}
        type="text"
        placeholder="Url картинки"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Автор"
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
};

export default AddBook;
