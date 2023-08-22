import { Routes, Route } from "react-router-dom";
import "./App.css";
import InfoForm from "./components/InfoForm";
import FetchApiDetail from "./components/FetchApiDetail";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() =>
    localStorage.getItem("UserData") === null ? false : true
  );

  useEffect(() => {
    const data = localStorage.getItem("UserData");
    data ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<InfoForm />} />

        <Route
          path="/fetch-api-detail"
          element={isLoggedIn ? <FetchApiDetail /> : <InfoForm />}
        />
      </Routes>
    </>
  );
}

export default App;
