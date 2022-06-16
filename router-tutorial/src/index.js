import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Inicio from "./routes/Inicio";
import NoEncontrado from "./routes/NoEncontrado";
import Post from "./routes/Post";
import UserProvider from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />}></Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
