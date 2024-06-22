import axios from "axios";

export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export const fetchPosts = async (
  page: number,
  limit: number
): Promise<BlogPost[]> => {
  try {
    const res = await apiClient.get(`/posts?_page=${page}&_limit=${limit}`);
    if (!Array.isArray(res.data)) {
      throw new Error("Unexpected response format");
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: string): Promise<BlogPost> => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching post details:", error);
    throw error;
  }
};
