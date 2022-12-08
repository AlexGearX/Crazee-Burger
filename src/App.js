import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/pages/Login/LoginPage";
import OrderPage from "./components/pages/Order/OrderPage";
import ErrorPage from "./components/pages/Error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/order/:name" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
