// src/store/useStore.ts
import { create } from "zustand";
import { BlogPost } from "@/src/helper/blogsHelper";

interface StoreState {
  posts: BlogPost[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  fetchPosts: () => Promise<void>;
}

const useStore = create<StoreState>((set, get) => ({
  posts: [],
  page: 1,
  hasMore: true,
  loading: false,
  fetchPosts: async () => {
    const { page, posts } = get();
    set({ loading: true });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
      );
      const newPosts = await response.json();
      set({
        posts: [...posts, ...newPosts],
        page: page + 1,
        hasMore: newPosts.length > 0,
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
