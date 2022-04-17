import { createRoot, Root } from "react-dom/client";

// components
import { Popup } from "./components/Popup";

interface Window {
  metaCheckMan: {
    root: Root | null;
    isRender: boolean;
  };
}
declare var window: Window;

const init = () => {
  const metaCheckManRootId = "metaCheckManRoot";
  window.metaCheckMan = window.metaCheckMan ?? {
    root: null,
    isRender: false,
  };

  // 初回のrender
  if (!window.metaCheckMan?.root) {
    const div = document.createElement("div");
    div.id = metaCheckManRootId;
    window.metaCheckMan.root = createRoot(document.body.appendChild(div));
    window.metaCheckMan.isRender = true;
    window.metaCheckMan.root.render(<Popup />);
    //    console.log("first");
    return;
  }

  // 2回目以降でunmount
  if (window.metaCheckMan.isRender) {
    window.metaCheckMan.isRender = false;
    window.metaCheckMan.root.unmount();
    // console.log("unmount");
    return;
  }

  // 2回目以降でrender
  const target = document.getElementById(metaCheckManRootId);
  if (target) {
    window.metaCheckMan.isRender = true;
    window.metaCheckMan.root = createRoot(target);
    window.metaCheckMan.root.render(<Popup />);
    // console.log("rerender");
  }
};
init();
