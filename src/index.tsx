import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Layout from "./components/common/Layout";
import Nutritions from "./components/Nutirition/Nutritions";
import Calories from "./components/Calories";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="calories" element={<Calories />} />
            <Route path="nutritions" element={<Nutritions />} />
            <Route path="app" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </LocalizationProvider>
);
