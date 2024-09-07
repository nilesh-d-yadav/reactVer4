import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import InProgress from "./components/InProgress";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import Layout from "./Layout.jsx";
import Notes from "./components/Notes/Notes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="inProgress" element={<InProgress />} />
      <Route path="chatbot" element={<Chatbot />} />
      <Route path="notes" element={<Notes />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
