import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/common/Layout";
import Nutritions from "./components/Nutritions";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/nutritions" element={<Nutritions />} />
          <Route path="/app" element={<App />} />
          {/* <Route index element={<Nutritions />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
