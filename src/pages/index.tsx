import { Routes, Route } from "react-router-dom";
import AccountantPage from "./AccountantPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountantPage />}></Route>
    </Routes>
  );
};
