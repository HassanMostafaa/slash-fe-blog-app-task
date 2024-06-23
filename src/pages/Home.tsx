"use client";
import React, { useEffect, useCallback } from "react";
import BlogList from "@/src/components/blog-list/BlogList";
import LayoutContainer from "../components/layout-container/LayoutContainer";
import { InfinitySpin } from "react-loader-spinner";
import useStore from "@/src/store/useStore";

const holdStyles: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 32,
};

const Home = () => {
  const { posts, fetchPosts, loading, hasMore } = useStore();

  const loadMorePosts = useCallback(async () => {
    if (!loading && hasMore) {
      await fetchPosts();
    }
  }, [loading, hasMore, fetchPosts]);

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
      {!hasMore && (
        <p style={{ ...holdStyles, marginTop: 32 }}>You are all caught up 🎉</p>
      )}
    </LayoutContainer>
  );
};

export default Home;
