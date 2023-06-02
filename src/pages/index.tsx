import { Routes, Route } from "react-router-dom";
import Main from "./main";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
};
