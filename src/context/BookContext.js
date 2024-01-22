import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext();

const BookContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  // ! CREATE
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  // ! READ
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!todos) {
      setTodos(getTodos());
    }
  }, [todos]);
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
  };
  const values = {
    addTodo,
    getTodos,
    todos,
    addTodo,
    deleteTodo,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default BookContext;
