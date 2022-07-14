import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IncompleteTodoProvider } from "./providers/IncompleteTodoProvider";
import { CompleteTodoProvider } from "./providers/CompleteTodoProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <IncompleteTodoProvider>
      <CompleteTodoProvider>
        <App />
      </CompleteTodoProvider>
    </IncompleteTodoProvider>
  </StrictMode>
);
