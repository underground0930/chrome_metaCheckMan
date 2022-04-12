import { createRoot } from "react-dom/client";
import { Options } from "./components/Options";

const init = () => {
  const app = document.getElementById("app");
  if (app) {
    const root = createRoot(app);
    root.render(<Options />);
  }
};
init();
