import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/moodie/Main";
import TmpForm from "./components/forms/TmpForm";
import SignUp from "./components/forms/SignUp";
import MainSummary from "./components/forms/MainSummary";
import MooSPopup from "./components/popups/MooSPopup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
