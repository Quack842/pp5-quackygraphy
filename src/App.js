import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./pages/auth/SignInForm";
import RegisterForm from "./pages/auth/RegisterForm";
import NotFound from "./components/NotFound";
import "./api/axiosDefault";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/signin" element={<SignInForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
