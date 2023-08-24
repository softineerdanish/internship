import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import InfoForm from "./components/InfoForm";
import FetchApiDetail from "./components/FetchApiDetail";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() =>
    localStorage.getItem("UserData") === null ? false : true
  );

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const data = localStorage.getItem("UserData");
    data ? setIsLoggedIn(true) : setIsLoggedIn(false);

    if (!isLoggedIn && path === "/fetch-api-detail") {
      alert("please fill the information");
      setPath(path);
      navigate("/");
    }
  }, [isLoggedIn, path]);

  //console.log(window.location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<InfoForm />} />

        <Route
          path="/fetch-api-detail"
          element={!isLoggedIn ? <InfoForm /> : <FetchApiDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
