import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import EditBook from "../components/EditBook";
import HomePage from "../components/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/add"} element={<AddBook />} />
      <Route path={"/book/:id"} element={<EditBook />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  );
};

export default MainRoutes;
