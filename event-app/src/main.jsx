import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EventApp } from "./EventApp";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <EventApp />
    </BrowserRouter>
  </StrictMode>
);
