import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/about/About";
import ContactUs from "./pages/contact/ContactUs";
import Doctors from "./pages/doctors/Doctors";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import DoctorProfile from "./pages/doctors/DoctorProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import DoctorSignup from "./pages/auth/doctor-signup/DoctorSignup";
import UserSignup from "./pages/auth/user-signup/UserSignup";
import { Provider } from "react-redux";
import store from "./store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "doctors/:id",
        element: <DoctorProfile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signup/user",
        element: <UserSignup />,
      },
      {
        path: "signup/doctor",
        element: <DoctorSignup />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
