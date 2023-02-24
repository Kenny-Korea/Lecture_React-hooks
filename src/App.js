import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import UseRef from "./components/UseRef";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseContext from "./components/UseContext";
import UseCallback from "./components/UseCallback";
import UseReducer from "./components/UseReducer";
import UseReducer2 from "./components/UseReducer2";
import TestUseReducer from "./components/test/TestUseReducer";
import TestUseReducer2 from "./components/test/TestUseReducer2";
import Employee from "./components/test/Employee";
import Employee1 from "./components/test/Employee1";
import { Calendar } from "./components/test/Calendar";
import TodoApp from "./components/test/TodoApp";
import Calendar2 from "./components/test/Calendar2";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>empty</div>} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/usereducer2" element={<UseReducer2 />} />
      </Routes>
      <Routes>
        <Route path="/test/useeffect" element={<UseEffect />} />
        <Route path="/test/useref" element={<UseRef />} />
        <Route path="/test/usecontext" element={<UseContext />} />
        <Route path="/test/usememo" element={<UseMemo />} />
        <Route path="/test/usecallback" element={<UseCallback />} />
        <Route path="/test/usereducer" element={<TestUseReducer />} />
        <Route path="/test/usereducer2" element={<TestUseReducer2 />} />
        <Route path="/test/employee" element={<Employee />} />
        <Route path="/test/employee1" element={<Employee1 />} />
        <Route path="/test/calendar" element={<Calendar />} />
        <Route path="/test/calendar2" element={<Calendar2 />} />
        <Route path="/test/todoapp" element={<TodoApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
