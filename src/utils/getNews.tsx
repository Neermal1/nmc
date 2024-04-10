import axiosInstance from "@/axiosInstance/axiosInstance";

export const getNews = async (page: number) => {
  try {
    const response = await axiosInstance.get(`news/list`);

    const posts = response.data;

    const totalPosts = posts.slice(page === 1 ? 0 : (page - 1) * 10, page * 10);

    const totalPages = Math.ceil(posts.length / 10);

    return {
      totalPosts,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      totalPosts: [],
      totalPages: 0,
    };
  }
};
