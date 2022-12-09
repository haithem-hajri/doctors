import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Footer from "./components/footer/Footer";
import { getUser } from "./features/auth/authSlice";
import { useAppDispatch } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUser());
    }
  }, []);
  return (
    <>
      <ToastContainer theme="light" />
      <Navbar />
      <div className="mt-[73px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
