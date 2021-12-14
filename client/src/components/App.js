import { useState, useEffect } from "react";
import "./App.css";
import { UserProvider } from "../context/UserContext";
import Navbar from "./layout/Navigation/Navbar";
import AuthService from "../services/auth.service";
import Portal from "./pages/Portal/Portal";
import Home from "./pages/Home/Home";
import Alert from "./shared/Alert";
const authService = new AuthService();

const App = (props) => {
  const [loggedUser, setLoggedUser] = useState(undefined);
  const [detailsClick, setClick] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    text: "",
  });

  const setDetailsClick = () => {
    setClick(true);
  };

  const outDetailsClick = () => {
    setClick(false);
  };

  const storeUser = (user) => {
    setLoggedUser(user);
  };

  useEffect(() => {
    authService
      .isloggedin()
      .then((response) => storeUser(response.data))
      .catch((err) => {
        storeUser(null)
      });
  }, []);

  const showText = (text) => setAlert({ show: true, text });
  const closeAlert = () => setAlert({ show: false, text: "" });

  return (
    <>
      <UserProvider
        value={{
          loggedUser,
          storeUser,
          detailsClick,
          setDetailsClick,
          outDetailsClick,
          showText,
        }}
      >
        <Alert show={alert.show} text={alert.text} closeAlert={closeAlert} />
        <Navbar />
        <main>{loggedUser ? <Portal /> : <Home />}</main>
      </UserProvider>
    </>
  );
};

export default App;
