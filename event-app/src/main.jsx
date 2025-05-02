import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EventApp } from "./EventApp";
import { UserProvider } from "./contexts/UserProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <EventApp />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
