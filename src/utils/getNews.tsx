import axiosInstance from "@/axiosInstance/axiosInstance";

export const getNews = async (page: number) => {
  try {
    const response = await axiosInstance.get(`news/list`);

    const posts = response.data;

    const postsPerPage = 12;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = page * postsPerPage;

    const totalPosts = posts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(posts.length / postsPerPage);

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


