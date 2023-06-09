import React, { useEffect, useState } from "react";
import Asset from "../../components/Asset";
import NoResults from "../../assets/images/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";

import { Form, Col, Row, Container } from "react-bootstrap";

import appStyles from "../../App.module.css";
import styles from "../../assets/styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Post from "./Post";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (error) {}
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, query, pathname]);
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Show Popular profiles */}
        <PopularProfiles mobile />
        {/* The Search Control */}
        <i className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`}></i>
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search Posts"
          />
        </Form>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              // If the search results come back with info
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              // If there is no results in the search
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          // While the content is loading, this spinner will play
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* Shows all the popular profiles */}
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
