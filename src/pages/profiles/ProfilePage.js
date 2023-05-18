import React, { useEffect, useState } from "react";

import { Col, Row, Container, Button, Image } from "react-bootstrap";
import Asset from "../../components/Asset";

import styles from "../../assets/styles/ProfilePage.module.css";
import btnStyles from "../../assets/styles/Buttons.module.css";
import appStyles from "../../App.module.css";

import PopularProfiles from "./PopularProfiles";
import Post from "../posts/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/images/no-results.png";

import { ProfileEditDropdown } from "../../components/MoreDropdown";

import { useCurrentUser } from "../../context/CurrentUserContext";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import {
  useProfileData,
  useSetProfileData,
} from "../../context/ProfileDataContext";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  const [profilePosts, setProfilePosts] = useState({ results: [] });
  // This will remove the "_" in the posted data and replace it with a space
  const formatType = (type) => {
    if (type) {
      return type.replace("_", " ");
    }
    return "";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (error) {}
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          {/* Main profile Image */}
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2 mb-3 text-capitalize">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            {/* Follow/Post/Follwoers Details */}
            <Col xs={4}>
              <div>{profile?.posts_count}</div>
              <div className={styles.FontDetails}>Posts</div>
            </Col>
            <Col xs={4}>
              <div>{profile?.followers_count}</div>
              <div className={styles.FontDetails}>Followers</div>
            </Col>
            <Col xs={4}>
              <div>{profile?.following_count}</div>
              <div className={styles.FontDetails}>Following</div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {/* Favourite Camera type, when applicable */}
              <div className={styles.FontTitle}>Favourite Camera Type</div>
              <div className={styles.Font}>{formatType(profile?.camera_type)}</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {/* The Follow/Unfollow Button when user is not signed in */}
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={btnStyles.Button}
                onClick={() => handleUnfollow(profile)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={btnStyles.ButtonBlue}
                onClick={() => handleFollow(profile)}
              >
                Follow
              </Button>
            ))}
          {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
        </Col>
        {/* The profile Bio if applicable */}
        {profile?.content && (
          <Col className={`${styles.FontBio} p-3`}>{profile.content}</Col>
        )}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      {/* The posts of the user */}
      <hr />
      <p className="text-center">All {profile?.owner}'s Posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}

      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* User posts mobile */}
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
