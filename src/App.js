import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./pages/auth/SignInForm";
import RegisterForm from "./pages/auth/RegisterForm";
import NotFound from "./components/NotFound";
import "./api/axiosDefault";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <Route path="/" element={<h1>Home Page</h1>} />
              <Route path="/signin" element={<SignInForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      </setCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
