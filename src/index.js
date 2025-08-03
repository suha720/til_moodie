import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/moodie/Main";
import TmpForm from "./components/forms/TmpForm";
import SignUp from "./components/forms/SignUp";
import MainSummary from "./components/forms/MainSummary";
import MooSPopup from "./components/popups/MooSPopup";
import TmpDate from "./components/dates/TmpDate";
import TmpWeek from "./components/dates/TmpWeek";
import MiniSchedule from "./components/calendars/MiniSchedule";
import App from "./pages/testitem/App";
import TestApp from "./pages/testform/TestApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
