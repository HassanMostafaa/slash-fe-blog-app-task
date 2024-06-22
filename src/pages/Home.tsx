"use client";
import React, { useState, useEffect, useCallback } from "react";
import { type BlogPost, fetchPosts } from "@/src/helper/blogsHelper";
import BlogList from "@/src/components/blog-list/BlogList";
import LayoutContainer from "../components/layout-container/LayoutContainer";
import { InfinitySpin } from "react-loader-spinner";

const holdStyles: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 32,
};

const Home = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    try {
      const newPosts = await fetchPosts(page, 20);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setHasMore(newPosts.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadMorePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (!loading && hasMore) {
      loadMorePosts();
    }
  }, [loading, hasMore, loadMorePosts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <LayoutContainer>
      <BlogList posts={posts} />
      {loading && (
        <div style={holdStyles}>
          <InfinitySpin width="200" color="#0071f3df" key={"infiniteSpinner"} />
          <p style={{ ...holdStyles, color: "#0071f3df" }}> Loading ...</p>
        </div>
      )}
      {!hasMore && <p style={holdStyles}>You are all cought up 🎉</p>}
    </LayoutContainer>
  );
};

export default Home;
