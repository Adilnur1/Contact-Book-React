import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../helpers/const";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todoDetail, setTodoDetail] = useState("");
  const [title, setTitle] = useState(todoDetail.todoName);
  const [number, setNumber] = useState(todoDetail.todoPrice);
  const [image, setImage] = useState(todoDetail.todoPhone);
  const [author, setAuthor] = useState(todoDetail.todoPhone);

  const getTodo = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setTodoDetail(data);
  };
  useEffect(() => {
    getTodo(id);
  }, []);

  useEffect(() => {
    if (todoDetail) {
      setTitle(todoDetail.todoName);
      setNumber(todoDetail.todoPrice);
      setImage(todoDetail.todoImg);
      setAuthor(todoDetail.todoAuthor);
    }
  }, [todoDetail]);

  const handleClick = () => {
    if (!title || !number || !image || !author) {
      return;
    }
    let newTodo = {
      todoName: title,
      todoPrice: number,
      todoImg: image,
      todoAuthor: author,
    };
    editTodo(id, newTodo);
    navigate("/products");
  };

  async function editTodo(id, newTodo) {
    await axios.patch(`${API}/${id}`, newTodo);
  }
  return (
    <div className="edit">
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={number}
        type="text"
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        value={author}
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Link to={"/"}>
        <button onClick={handleClick}>Save</button>
      </Link>
    </div>
  );
};

export default EditBook;
