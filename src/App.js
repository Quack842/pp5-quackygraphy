import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./pages/auth/SignInForm";
import RegisterForm from "./pages/auth/RegisterForm";
import NotFound from "./components/NotFound";
import "./api/axiosDefault";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/posts/create" element={<PostCreateForm />} />
          <Route exact path="/posts/:id" element={<PostPage/> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
