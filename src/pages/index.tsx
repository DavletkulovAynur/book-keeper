import { Routes, Route } from "react-router-dom";
import Test from "./test";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />}></Route>
    </Routes>
  );
};
