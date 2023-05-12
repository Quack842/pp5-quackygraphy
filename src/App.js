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
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import { useCurrentUser } from "./context/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PostsPage message="No results found. Adjust the search keywords." />
            }
          />
          <Route
            exact
            path="/feed"
            element={
              <PostsPage 
                message="No results found. Adjust the search keywords Or Follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
                />
            }
          />
          <Route
            exact
            path="/liked"
            element={
              <PostsPage 
                message="No results found. Adjust the search keywords Or Like a Post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
            }
          />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/posts/create" element={<PostCreateForm />} />
          <Route exact path="/posts/:id" element={<PostPage />} />
          <Route exact path="/posts/:id/edit" element={<PostEditForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
