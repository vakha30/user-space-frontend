import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RootRouting } from "root/RootRouting";
import { AuthProvider } from "./js-space/context/authContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <RootRouting />
    </AuthProvider>
  </BrowserRouter>
);
